import { r as registerInstance, h } from './index-d0bec2e9.js';


const GlobalH1 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { style: { fontSize: '2.2rem', textAlign: 'center' } }, h("slot", null)));
    }
};
GlobalH1.style = daisyUiCss;

export { GlobalH1 as global_h1 };

//# sourceMappingURL=global-h1.entry.js.map