import { r as registerInstance, a as createEvent, h } from './index-d0bec2e9.js';
import { o as onCountdown } from './index-c75a13a4.js';
import './settings-a7813c66.js';


const RootComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.goToStartGuestbookScreen = createEvent(this, "goToStartGuestbookScreen", 7);
        this.countdownInt = 60;
    }
    componentDidLoad() {
        (async () => {
            await onCountdown(this.countdownInt, 1, (i) => (this.countdownInt = i));
            this.countdownInt = undefined;
        })();
    }
    render() {
        return (h("div", { style: {
                height: '90vh',
                display: 'flex',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
            } }, h("span", null, h("global-h1", null, "Success"), h("global-h2", null, "your photo is printing, please wait..."), this.countdownInt !== undefined && h("global-h1", null, this.countdownInt), this.countdownInt === undefined && (h("div", null, h("br", null), h("div", { style: { display: 'flex', justifyContent: 'center', gap: '10px' } }, h("button", { class: "btn btn-primary", onClick: () => this.goToStartGuestbookScreen.emit() }, "Start again")))))));
    }
};
RootComponent.style = daisyUiCss;

export { RootComponent as print_photo_success_screen };

//# sourceMappingURL=print-photo-success-screen.entry.js.map