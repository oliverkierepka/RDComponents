export class RWFoundation {
    constructor(adapter = {}) {
        this.adapter_ = adapter;
    }
    static get cssClasses() {
        return {};
    }
    static get strings() {
        return {};
    }
    static get numbers() {
        return {};
    }
    static get defaultAdapter() {
        return {};
    }
    init() {
    }
    destroy() {
    }
}
export default RWFoundation;
