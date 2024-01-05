import { B as BUILD, c as consoleDevInfo, H, d as doc, N as NAMESPACE, p as promiseResolve, b as bootstrapLazy } from './index-d0bec2e9.js';
export { s as setNonce } from './index-d0bec2e9.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.9.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    const scriptElm = BUILD.scriptDataOpts
        ? Array.from(doc.querySelectorAll('script')).find((s) => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) ||
            s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = import.meta.url;
    const opts = BUILD.scriptDataOpts ? (scriptElm || {})['data-opts'] || {} : {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["global-h1",[[1,"global-h1"]]],["capture-countdown-screen",[[1,"capture-countdown-screen",{"width":[2],"height":[2],"countdownInt":[32],"videoElement":[32],"imageDataUrls":[32],"selectedImageDataUrl":[32],"captureSequenceStatus":[32],"isFlash":[32]}]]],["print-photo-fail-screen",[[1,"print-photo-fail-screen",{"error":[1]}]]],["print-photo-success-screen",[[1,"print-photo-success-screen",{"countdownInt":[32]}]]],["control-panel-screen",[[1,"control-panel-screen",{"imageListStatus":[32],"imageList":[32],"printQueue":[32],"availableDiskSpace":[32]}]]],["start-guestbook-screen",[[1,"start-guestbook-screen",{"width":[2],"height":[2]}]]],["edit-settings-screen",[[1,"edit-settings-screen",{"serverLiveStatus":[32],"serverLiveStatusColorIndicator":[32],"serverBaseUrl":[32],"paperSizeKey":[32],"settings":[32]}]]],["init-screen",[[1,"init-screen"]]],["loading-guestbook-screen",[[1,"loading-guestbook-screen"]]],["global-h2",[[1,"global-h2"]]],["root-component",[[1,"root-component",{"screenStatus":[32],"streamDims":[32],"streamDataIsReady":[32],"sendPhotoErrorName":[32]},[[0,"clickInitScreenEditSettingsButton","clickSettingsButtonHandler"],[0,"goToStartGuestbookScreen","goToStartGuestbookScreen"],[0,"goToPrintPhotoSuccessScreen","goToPrintPhotoSuccessScreen"],[0,"goToPrintPhotoFailScreen","goToPrintPhotoFailScreen"],[0,"goToControlPanelScreen","goToControlPanelScreen"],[0,"startCaptureCountdown","startCaptureCountdown"]]]]]], options);
});

//# sourceMappingURL=my-first-stencil-comp.esm.js.map