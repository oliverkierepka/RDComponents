export class RWFoundation<AdapterType extends {} = {}> {
  static get cssClasses(): { [key: string]: string } {
    // Classes extending RWFoundation should implement this method to return an object which exports every
    // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'rw-component--active'}
    return {};
  }

  static get strings(): { [key: string]: string } {
    // Classes extending RWFoundation should implement this method to return an object which exports all
    // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
    return {};
  }

  static get numbers(): { [key: string]: number } {
    // Classes extending RWFoundation should implement this method to return an object which exports all
    // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
    return {};
  }

  static get defaultAdapter(): {} {
    // Classes extending RWFoundation may choose to implement this getter in order to provide a convenient
    // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
    // validation.
    return {};
  }

  protected adapter_: AdapterType;

  constructor(adapter: AdapterType = {} as AdapterType) {
    this.adapter_ = adapter;
  }

  init() {
    // Subclasses should override this method to perform initialization routines (registering events, etc.)
  }

  destroy() {
    // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  }
}

// tslint:disable-next-line:no-default-export Needed for backward compatibility with RW Web v0.44.0 and earlier.
export default RWFoundation;
