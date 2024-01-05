import { r as registerInstance, a as createEvent, h } from './index-d0bec2e9.js';


const InitScreen = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.goToStartGuestbookScreen = createEvent(this, "goToStartGuestbookScreen", 7);
        this.goToControlPanelScreen = createEvent(this, "goToControlPanelScreen", 7);
        this.clickInitScreenEditSettingsButton = createEvent(this, "clickInitScreenEditSettingsButton", 7);
    }
    render() {
        return (h("div", null, h("h1", null, "Do you want to first change the settings?"), h("div", { style: { display: 'flex', justifyContent: 'center' } }, h("div", { style: { display: 'flex', gap: '10px' } }, h("button", { class: "btn btn-primary", onClick: () => this.goToStartGuestbookScreen.emit() }, "Start"), h("button", { class: "btn btn-accent", onClick: () => this.clickInitScreenEditSettingsButton.emit() }, "Edit Settings"), h("button", { class: "btn btn-accent", onClick: () => this.goToControlPanelScreen.emit() }, "Control panel")))));
    }
};
InitScreen.style = daisyUiCss;

export { InitScreen as init_screen };

//# sourceMappingURL=init-screen.entry.js.map