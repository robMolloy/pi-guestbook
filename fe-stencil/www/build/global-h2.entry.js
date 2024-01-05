import { r as registerInstance, h } from './index-d0bec2e9.js';


const GlobalH2 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { style: { fontSize: '1.4rem', textAlign: 'center' } }, h("slot", null)));
    }
};
GlobalH2.style = daisyUiCss;

export { GlobalH2 as global_h2 };

//# sourceMappingURL=global-h2.entry.js.map