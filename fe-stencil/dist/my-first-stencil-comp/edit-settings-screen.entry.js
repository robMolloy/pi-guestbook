import { r as registerInstance, a as createEvent, h } from './index-d0bec2e9.js';
import { p as paperSizeTranslator, s as setSettingsInLocalStorage, g as getSettingsFromLocalStorage } from './settings-a7813c66.js';

const getServerLiveStatus = async () => {
    const serverBaseUrl = localStorage.getItem('serverBaseUrl');
    if (!serverBaseUrl)
        return { success: false, status: 'no_base_url_provided' };
    let pingServerResponse = undefined;
    try {
        pingServerResponse = await fetch(`${serverBaseUrl}ping`);
        if ((pingServerResponse === null || pingServerResponse === void 0 ? void 0 : pingServerResponse.ok) !== true)
            return { success: false, status: 'server_not_found' };
    }
    catch (error) {
        console.error(error);
        return { success: false, status: 'server_not_found' };
    }
    try {
        const pingServerJson = await pingServerResponse.json();
        if ((pingServerJson === null || pingServerJson === void 0 ? void 0 : pingServerJson.success) !== true)
            return { success: false, status: 'server_found_invalid_response' };
    }
    catch (error) {
        console.error(error);
        return { success: false, status: 'server_found_invalid_response' };
    }
    return { success: true, status: 'server_found' };
};


const EditSettingsScreen = class {
    async handleServerLiveStatus() {
        this.serverLiveStatus = 'initialising';
        this.serverLiveStatusColorIndicator = 'orange';
        const serverLiveStatusResponse = await getServerLiveStatus();
        this.serverLiveStatus = serverLiveStatusResponse.status;
        this.serverLiveStatusColorIndicator = serverLiveStatusResponse.success ? 'green' : 'red';
    }
    async handleSave() {
        const stats = paperSizeTranslator[this.paperSizeKey];
        setSettingsInLocalStorage({
            paperSizeKey: this.paperSizeKey,
            paperSizeLabel: stats.label,
            paperSizeWidth: stats.width,
            paperSizeHeight: stats.height,
            paperSizeAspectRatio: stats.aspectRatio,
            serverBaseUrl: this.serverBaseUrl,
            serverPrintImageEndpoint: stats.printImageEndpoint,
            serverBackupImagesEndpoint: stats.backupImagesEndpoint,
        });
        this.settings = getSettingsFromLocalStorage();
    }
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.goToStartGuestbookScreen = createEvent(this, "goToStartGuestbookScreen", 7);
        this.serverLiveStatus = 'uninitialised';
        this.serverLiveStatusColorIndicator = 'orange';
        this.serverBaseUrl = localStorage.getItem('serverBaseUrl');
        this.paperSizeKey = localStorage.getItem('paperSizeKey');
        this.settings = getSettingsFromLocalStorage();
        this.handleServerLiveStatus();
    }
    render() {
        return (h("div", null, h("div", null, "Server live status:", h("span", { onClick: () => this.handleServerLiveStatus(), style: { backgroundColor: this.serverLiveStatusColorIndicator } }, this.serverLiveStatus)), h("br", null), h("label", { htmlFor: "server-base-url-input" }, "server-base-url (include the /):"), h("input", { type: "text", id: "server-base-url-input", name: "server-base-url", class: "input input-bordered w-full max-w-xs", "aria-label": "Enter the api-base-url", required: true, onInput: e => {
                const target = e.target;
                this.serverBaseUrl = target.value;
            }, value: this.serverBaseUrl }), h("br", null), h("br", null), h("span", null, "Select paper size:"), Object.entries(paperSizeTranslator).map(([k, v]) => {
            return (h("div", { class: "form-control" }, h("label", { style: { display: 'flex', gap: '10px', marginBottom: '10px' } }, h("input", { type: "radio", name: "radio-10", class: "radio checked:bg-red-500", onClick: () => (this.paperSizeKey = k), checked: this.paperSizeKey === k }), h("span", { class: "label-text" }, v.label))));
        }), h("pre", null, JSON.stringify(this.settings, undefined, 2)), h("br", null), h("br", null), h("div", { style: { display: 'flex', justifyContent: 'center' } }, h("div", { style: { display: 'flex', gap: '10px' } }, h("button", { class: "btn btn-primary", onClick: () => this.goToStartGuestbookScreen.emit() }, "Start"), h("button", { class: "btn btn-accent", onClick: () => this.handleSave() }, "Save")))));
    }
};
EditSettingsScreen.style = daisyUiCss;

export { EditSettingsScreen as edit_settings_screen };

//# sourceMappingURL=edit-settings-screen.entry.js.map