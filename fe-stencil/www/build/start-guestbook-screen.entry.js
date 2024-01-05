import { r as registerInstance, a as createEvent, h, g as getElement } from './index-d0bec2e9.js';


const StartCaptureCountdown = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.startCaptureCountdown = createEvent(this, "startCaptureCountdown", 7);
        this.width = undefined;
        this.height = undefined;
    }
    componentDidLoad() {
        const video = this.el.shadowRoot.querySelector('video');
        video.srcObject = window.streamData;
    }
    render() {
        return (h("div", { style: { height: '100vh' }, onClick: () => this.startCaptureCountdown.emit() }, h("global-h1", null, "Tap anywhere for the countdown to begin"), h("br", null), h("div", { style: { height: '37vh', position: 'relative' } }, h("video", { style: { transform: 'scaleX(-1)', width: '100%', height: '100%' }, width: this.width, height: this.height, autoplay: true }))));
    }
    get el() { return getElement(this); }
};
StartCaptureCountdown.style = daisyUiCss;

export { StartCaptureCountdown as start_guestbook_screen };

//# sourceMappingURL=start-guestbook-screen.entry.js.map