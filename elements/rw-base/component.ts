import {RWFoundation} from './foundation';
import {CustomEventListener, EventType, SpecificEventListener} from './types';

export class RWComponent<FoundationType extends RWFoundation> {
  static attachTo(root: Element): RWComponent<RWFoundation<{}>> {
    // Subclasses which extend RWBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new RWComponent(root, new RWFoundation({}));
  }

  protected root_: Element;
  protected foundation_: FoundationType;

  constructor(
      root: Element,
      foundation?: FoundationType,
      ...args: Array<unknown>
  ) {
    this.root_ = root;
    this.initialize(...args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */
  initialize(..._args: Array<unknown>) {
    // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.
  }

  getDefaultFoundation(): FoundationType {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' +
        'foundation class');
  }

  initialSyncWithDOM() {
    // Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  }

  destroy() {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation_.destroy();
  }

  /**
   * Wrapper method to add an event listener to the component's root element. This is most useful when
   * listening for custom events.
   */
  listen<K extends EventType>(
    evtType: K, handler: SpecificEventListener<K>, options?: AddEventListenerOptions | boolean): void;
  listen<E extends Event>(
    evtType: string, handler: CustomEventListener<E>, options?: AddEventListenerOptions | boolean): void;
  listen(evtType: string, handler: EventListener, options?: AddEventListenerOptions | boolean) {
    this.root_.addEventListener(evtType, handler, options);
  }

  /**
   * Wrapper method to remove an event listener to the component's root element. This is most useful when
   * unlistening for custom events.
   */
  unlisten<K extends EventType>(
    evtType: K, handler: SpecificEventListener<K>, options?: AddEventListenerOptions | boolean): void;
  unlisten<E extends Event>(
    evtType: string, handler: CustomEventListener<E>, options?: AddEventListenerOptions | boolean): void;
  unlisten(evtType: string, handler: EventListener, options?: AddEventListenerOptions | boolean) {
    this.root_.removeEventListener(evtType, handler, options);
  }

  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
   */
  emit<T extends object>(evtType: string, evtData: T, shouldBubble = false) {
    let evt: CustomEvent<T>;
    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent<T>(evtType, {
        bubbles: shouldBubble,
        detail: evtData,
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    this.root_.dispatchEvent(evt);
  }
}

// tslint:disable-next-line:no-default-export Needed for backward compatibility with RW Web v0.44.0 and earlier.
export default RWComponent;