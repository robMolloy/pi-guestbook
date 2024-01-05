import { r as registerInstance, a as createEvent, h } from './index-d0bec2e9.js';


const RootComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.goToStartGuestbookScreen = createEvent(this, "goToStartGuestbookScreen", 7);
        this.error = undefined;
    }
    render() {
        return (h("div", { style: {
                height: '90vh',
                display: 'flex',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
            } }, h("span", null, h("global-h1", null, "Error"), h("global-h2", null, "Something went wrong"), h("br", null), h("button", { class: "btn btn-primary", onClick: () => this.goToStartGuestbookScreen.emit() }, "Tap to try again"), h("br", null), h("br", null), h("div", null, "Error: ", this.error === undefined ? 'unknown' : this.error))));
    }
};
RootComponent.style = daisyUiCss;

export { RootComponent as print_photo_fail_screen };

//# sourceMappingURL=print-photo-fail-screen.entry.js.map