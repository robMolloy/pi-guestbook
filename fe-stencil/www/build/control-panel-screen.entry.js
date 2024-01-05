import { r as registerInstance, h } from './index-d0bec2e9.js';
import { r as retrieveBackupImageList, b as retrievePrintQueue, c as retrieveAvailableDiskSpace, e as retrieveBackupImageDataUrls, a as sendImageDataUrlToPrint } from './index-c75a13a4.js';
import './settings-a7813c66.js';


const ViewBackupsScreen = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.displayImageListFromImageListResponse = (imageListResponse) => {
            const imageList = {};
            imageListResponse.data.forEach(x => (imageList[x] = undefined));
            this.imageList = imageList;
            this.imageListStatus = 'loaded';
        };
        this.imageListStatus = 'loading';
        this.imageList = {};
        this.printQueue = '';
        this.availableDiskSpace = '';
        (async () => {
            const imageListResponse = await retrieveBackupImageList();
            if ((imageListResponse === null || imageListResponse === void 0 ? void 0 : imageListResponse.success) !== true)
                return (this.imageListStatus = 'error');
            this.displayImageListFromImageListResponse(imageListResponse);
            const printQueueResponse = await retrievePrintQueue();
            this.printQueue = printQueueResponse.success ? printQueueResponse.data : 'could not find the print queue data...';
            const availableDiskSpace = await retrieveAvailableDiskSpace();
            this.availableDiskSpace = availableDiskSpace.success ? availableDiskSpace.data : 'available disk space does not match expected data structure';
        })();
    }
    render() {
        return (h("div", null, h("global-h2", null, "Available disk space"), this.availableDiskSpace, h("global-h2", null, "Print queue"), this.printQueue, h("global-h2", null, "Image list"), this.imageListStatus === 'loading' && h("div", null, "loading..."), this.imageListStatus === 'error' && h("div", { style: { backgroundColor: 'red' } }, "error"), this.imageListStatus === 'loaded' &&
            Object.entries(this.imageList).map(([k, v]) => (h("div", { style: { padding: '10px' } }, h("div", null, k, h("button", { class: "btn btn-primary", onClick: async () => {
                    const resp = await retrieveBackupImageDataUrls(k);
                    if ((resp === null || resp === void 0 ? void 0 : resp.success) !== true)
                        return (this.imageListStatus = 'error');
                    this.imageList[k] = resp.data;
                    this.imageList = Object.assign({}, this.imageList);
                    this.imageListStatus = 'loaded';
                } }, "load images")), v !== undefined && (h("div", { style: { display: 'flex', justifyContent: 'center', gap: '10px' } }, v.map(imageDataUrl => (h("div", { onClick: () => {
                    sendImageDataUrlToPrint({ imageDataUrl });
                }, style: {
                    minWidth: '175px',
                    minHeight: '175px',
                    backgroundImage: `url('${imageDataUrl}')`,
                    backgroundSize: 'cover',
                    backgroundposition: 'center',
                    border: '1px solid black',
                } }))))))))));
    }
};
ViewBackupsScreen.style = daisyUiCss;

export { ViewBackupsScreen as control_panel_screen };

//# sourceMappingURL=control-panel-screen.entry.js.map