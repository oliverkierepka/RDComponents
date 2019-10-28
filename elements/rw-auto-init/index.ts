// eslint-disable only-arrow-functions

import {RWComponent} from '@mrmoree/base/component';
import {RWFoundation} from '@mrmoree/base/foundation';

import {strings} from './constants';

const {AUTO_INIT_ATTR, AUTO_INIT_STATE_ATTR, INITIALIZED_STATE} = strings;

export interface RWAttachable {
  new<F extends RWFoundation>(root: Element, foundation?: F, ...args: Array<unknown>): RWComponent<F>;

  // Static method.
  attachTo<F extends RWFoundation>(root: Element): RWComponent<F>;
}

interface InternalComponentRegistry {
  [key: string]: RWAttachable;
}

const registry: InternalComponentRegistry = {};

const CONSOLE_WARN = console.warn.bind(console); // eslint-disable-line no-console

function emit<T extends object>(evtType: string, evtData: T, shouldBubble = false) {
  let evt;
  if (typeof CustomEvent === 'function') {
    evt = new CustomEvent<T>(evtType, {
      bubbles: shouldBubble,
      detail: evtData,
    });
  } else {
    evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(evtType, shouldBubble, false, evtData);
  }

  document.dispatchEvent(evt);
}

/* istanbul ignore next: optional argument is not a branch statement */
/**
 * Auto-initializes all MDC components on a page.
 */
export function mdcAutoInit(root = document) {
  const components = [];
  let nodes: Element[] = [].slice.call(root.querySelectorAll(`[${AUTO_INIT_ATTR}]`));
  nodes = nodes.filter((node) => node.getAttribute(AUTO_INIT_STATE_ATTR) !== INITIALIZED_STATE);

  for (const node of nodes) {
    const ctorName = node.getAttribute(AUTO_INIT_ATTR);
    if (!ctorName) {
      throw new Error('(rw-auto-init) Constructor name must be given.');
    }

    const Constructor = registry[ctorName]; // eslint-disable-line no-console
    if (typeof Constructor !== 'function') {
      throw new Error(
          `(rw-auto-init) Could not find constructor in registry for ${ctorName}`);
    }

    // TODO: Should we make an eslint rule for an attachTo() static method?
    // See https://github.com/Microsoft/TypeScript/issues/14600 for discussion of static interface support in TS
    const component = Constructor.attachTo(node);
    Object.defineProperty(node, ctorName, {
      configurable: true,
      enumerable: false,
      value: component,
      writable: false,
    });
    components.push(component);
    node.setAttribute(AUTO_INIT_STATE_ATTR, INITIALIZED_STATE);
  }

  emit('RWAutoInit:End', {});
  return components;
}

// Constructor is PascalCased because it is a direct reference to a class, rather than an instance of a class.
// tslint:disable-next-line:variable-name
rwAutoInit.register = function(componentName: string, Constructor: RWAttachable, warn = CONSOLE_WARN) {
  if (typeof Constructor !== 'function') {
    throw new Error(`(rw-auto-init) Invalid Constructor value: ${Constructor}. Expected function.`);
  }
  const registryValue = registry[componentName];
  if (registryValue) {
    warn(`(rw-auto-init) Overriding registration for ${componentName} with ${Constructor}. Was: ${registryValue}`);
  }
  registry[componentName] = Constructor;
};

rwAutoInit.deregister = function(componentName: string) {
  delete registry[componentName];
};

rwAutoInit.deregisterAll = function() {
  const keys = Object.keys(registry) as string[];
  keys.forEach(this.deregister, this);
};

// eslint-disable-next-line: no-default-export Needed for backward compatibility with RW Web v0.44.0 and earlier.
export default rwAutoInit;
