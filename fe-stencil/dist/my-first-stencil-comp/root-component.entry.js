import { r as registerInstance, h, g as getElement } from './index-d0bec2e9.js';

const getMaxVideoMediaDimensions = async (p) => {
    const videoMedia = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: { width: { ideal: p.ideal }, height: { ideal: p.ideal } },
    });
    const tracks = videoMedia.getVideoTracks();
    const settings = tracks.find(x => !!x).getSettings();
    const wMax = settings.width;
    const hMax = settings.height;
    const rtn = (() => {
        if (wMax / p.aspectRatio <= hMax)
            return { width: wMax, height: wMax / p.aspectRatio };
        if (hMax * p.aspectRatio <= wMax)
            return { width: hMax * p.aspectRatio, height: hMax };
    })();
    tracks.forEach(track => track.stop());
    return rtn;
};
const getStreamData = (p) => {
    return new Promise((resolve, reject) => {
        navigator.mediaDevices
            .getUserMedia({ video: { width: { ideal: p.width }, height: { ideal: p.height } } })
            .then(function (initStream) {
            const stream = initStream;
            resolve(stream);
        })
            .catch(function (error) {
            window.alert('Error accessing webcam:');
            console.error('Error accessing webcam:', error);
            reject();
        });
    });
};
const RootComponent = class {
    clickSettingsButtonHandler() {
        this.screenStatus = 'edit_settings_screen';
    }
    goToStartGuestbookScreen() {
        this.screenStatus = 'start_guestbook_screen';
    }
    goToPrintPhotoSuccessScreen() {
        this.screenStatus = 'print_photo_success_screen';
    }
    goToPrintPhotoFailScreen(e) {
        this.sendPhotoErrorName = e.detail;
        this.screenStatus = 'print_photo_fail_screen';
    }
    goToControlPanelScreen() {
        this.screenStatus = 'control_panel_screen';
    }
    startCaptureCountdown() {
        this.screenStatus = 'capture_countdown_screen';
    }
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.screenStatus = 'init_screen';
        this.streamDims = undefined;
        this.streamDataIsReady = false;
        this.sendPhotoErrorName = undefined;
        (async () => {
            this.streamDims = await getMaxVideoMediaDimensions({ ideal: 1080, aspectRatio: 6 / 4 });
            window.streamData = await getStreamData(this.streamDims);
            this.streamDataIsReady = true;
        })();
    }
    render() {
        var _a, _b, _c, _d;
        return (h("div", null, this.screenStatus === 'init_screen' && h("init-screen", null), this.screenStatus === 'edit_settings_screen' && h("edit-settings-screen", null), this.screenStatus === 'control_panel_screen' && h("control-panel-screen", null), this.screenStatus === 'start_guestbook_screen' && !this.streamDataIsReady && h("loading-guestbook-screen", null), this.screenStatus === 'start_guestbook_screen' && this.streamDataIsReady && h("start-guestbook-screen", { width: (_a = this.streamDims) === null || _a === void 0 ? void 0 : _a.width, height: (_b = this.streamDims) === null || _b === void 0 ? void 0 : _b.height }), this.screenStatus === 'capture_countdown_screen' && h("capture-countdown-screen", { width: (_c = this.streamDims) === null || _c === void 0 ? void 0 : _c.width, height: (_d = this.streamDims) === null || _d === void 0 ? void 0 : _d.height }), this.screenStatus === 'print_photo_success_screen' && h("print-photo-success-screen", null), this.screenStatus === 'print_photo_fail_screen' && h("print-photo-fail-screen", { error: this.sendPhotoErrorName })));
    }
    get el() { return getElement(this); }
};

export { RootComponent as root_component };

//# sourceMappingURL=root-component.entry.js.map