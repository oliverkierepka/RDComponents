import { RWFoundation } from './foundation';
export class RWComponent {
    constructor(root, foundation, ...args) {
        this.root_ = root;
        this.initialize(...args);
        this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
        this.foundation_.init();
        this.initialSyncWithDOM();
    }
    static attachTo(root) {
        return new RWComponent(root, new RWFoundation({}));
    }
    initialize(..._args) {
    }
    getDefaultFoundation() {
        throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' +
            'foundation class');
    }
    initialSyncWithDOM() {
    }
    destroy() {
        this.foundation_.destroy();
    }
    listen(evtType, handler, options) {
        this.root_.addEventListener(evtType, handler, options);
    }
    unlisten(evtType, handler, options) {
        this.root_.removeEventListener(evtType, handler, options);
    }
    emit(evtType, evtData, shouldBubble = false) {
        let evt;
        if (typeof CustomEvent === 'function') {
            evt = new CustomEvent(evtType, {
                bubbles: shouldBubble,
                detail: evtData,
            });
        }
        else {
            evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(evtType, shouldBubble, false, evtData);
        }
        this.root_.dispatchEvent(evt);
    }
}
export default RWComponent;
//# sourceMappingURL=component.js.map