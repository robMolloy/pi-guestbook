import { r as registerInstance, a as createEvent, h, g as getElement } from './index-d0bec2e9.js';
import { d as delay, g as getImageDataUrlFromVideoElement, s as sendImageDataUrlsForBackup, o as onCountdown, a as sendImageDataUrlToPrint } from './index-c75a13a4.js';
import './settings-a7813c66.js';


const captureCountdownScreenCss = ".countdownIntCircle{position:absolute;right:0;z-index:1;font-weight:900;font-size:2rem;color:white;border:solid 5px white;border-radius:200px;margin:10px;height:60px;width:60px;display:flex;align-items:center;justify-content:center;background-color:coral}.capture-canvases{height:100%;display:grid;grid-template-rows:1fr 1fr;grid-template-columns:1fr 1fr;gap:30px;max-width:100vw;margin:0 20px}.capture-canvases>*{background-color:#eee}.capture-canvas{position:relative;background-size:cover;background-position:center}.captured-image-number{position:absolute;right:0;height:30px;width:30px;border-radius:30px;background-color:coral;border:solid 3px white;display:flex;justify-content:center;align-items:center;transform:translate(35%, -35%)}#flash{position:absolute;z-Index:1;width:100%;height:100%;background-color:white;opacity:0;transition:opacity 1s}#flash.flash{opacity:1;animation:flashFade 1s}@keyframes flashFade{from{opacity:1}to{opacity:0}}";

const CaptureCountdownScreen = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.goToStartGuestbookScreen = createEvent(this, "goToStartGuestbookScreen", 7);
        this.goToPrintPhotoSuccessScreen = createEvent(this, "goToPrintPhotoSuccessScreen", 7);
        this.goToPrintPhotoFailScreen = createEvent(this, "goToPrintPhotoFailScreen", 7);
        this.startCaptureCountdown = createEvent(this, "startCaptureCountdown", 7);
        this.width = undefined;
        this.height = undefined;
        this.countdownInt = undefined;
        this.videoElement = undefined;
        this.imageDataUrls = [undefined, undefined, undefined, undefined];
        this.selectedImageDataUrl = undefined;
        this.captureSequenceStatus = 'initial';
        this.isFlash = false;
    }
    async captureSequence(p) {
        const videoElement = p.videoElement;
        for (const num of [0, 1, 2, 3]) {
            if (num !== 0)
                await delay(2000);
            this.isFlash = true;
            this.imageDataUrls[num] = getImageDataUrlFromVideoElement({ videoElement });
            this.imageDataUrls = [...this.imageDataUrls];
        }
        sendImageDataUrlsForBackup({ imageDataUrls: this.imageDataUrls });
        return;
    }
    componentDidLoad() {
        const videoElement = this.el.shadowRoot.querySelector('video');
        videoElement.srcObject = window.streamData;
        (async () => {
            this.captureSequenceStatus = 'countdown';
            await onCountdown(5, 0, (x) => (this.countdownInt = x));
            this.captureSequenceStatus = 'capturing';
            await this.captureSequence({ videoElement });
            this.captureSequenceStatus = 'selecting';
        })();
    }
    render() {
        return (h("div", { style: { display: 'flex', flexDirection: 'column', height: '100vh' } }, this.captureSequenceStatus !== 'selecting' && h("global-h1", null, "Strike a pose!"), this.captureSequenceStatus === 'selecting' && (h("div", null, h("global-h1", null, "Select the photo you want to print"), h("global-h2", null, "If you don't like any, just tap \"Start again\""))), h("div", { style: { display: 'flex', justifyContent: 'center' } }, h("div", { style: { height: '37vh', width: `${(37 * 6) / 4}vh`, position: 'relative' } }, this.captureSequenceStatus === 'selecting' && (h("div", { style: {
                width: '100%',
                height: '100%',
                backgroundColor: '#eee',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '2rem',
                backgroundImage: `url('${this.selectedImageDataUrl}')`,
                backgroundSize: 'cover',
                backgroundposition: 'center',
            } }, this.selectedImageDataUrl === undefined && h("global-h2", null, "Select your favourite image"))), this.captureSequenceStatus !== 'selecting' && (h("div", { style: { width: '100%', height: '100%' } }, h("div", { onAnimationEnd: () => (this.isFlash = false), id: "flash", class: this.isFlash ? 'flash' : '' }), this.captureSequenceStatus === 'countdown' && h("div", { class: "countdownIntCircle" }, this.countdownInt), h("video", { style: { transform: 'scaleX(-1)', width: '100%', height: '100%' }, width: this.width, height: this.height, autoplay: true }))))), h("br", null), this.captureSequenceStatus === 'selecting' && (h("div", { style: { display: 'flex', justifyContent: 'center', gap: '10px' } }, h("button", { class: "btn btn-primary", disabled: this.selectedImageDataUrl === undefined, onClick: async () => {
                const response = await sendImageDataUrlToPrint({ imageDataUrl: this.selectedImageDataUrl });
                if ((response === null || response === void 0 ? void 0 : response.success) === true)
                    return this.goToPrintPhotoSuccessScreen.emit();
                this.goToPrintPhotoFailScreen.emit(response.error);
            } }, "Print photo"), h("button", { class: "btn btn-accent", onClick: () => this.goToStartGuestbookScreen.emit() }, "Start again"))), h("br", null), h("div", { class: "capture-canvases" }, [0, 1, 2, 3].map(x => {
            var _a;
            return (h("span", { class: "capture-canvas", style: { backgroundImage: `url('${(_a = this.imageDataUrls) === null || _a === void 0 ? void 0 : _a[x]}')` }, onClick: () => {
                    var _a;
                    if (this.captureSequenceStatus !== 'selecting')
                        return;
                    this.selectedImageDataUrl = (_a = this.imageDataUrls) === null || _a === void 0 ? void 0 : _a[x];
                } }, h("span", { class: "captured-image-number" }, " ", x + 1, " ")));
        })), h("br", null)));
    }
    get el() { return getElement(this); }
};
CaptureCountdownScreen.style = daisyUiCss + captureCountdownScreenCss;

export { CaptureCountdownScreen as capture_countdown_screen };

//# sourceMappingURL=capture-countdown-screen.entry.js.map