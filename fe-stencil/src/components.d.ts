/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CaptureCountdownScreen {
        "height": number;
        "width": number;
    }
    interface ControlPanelScreen {
    }
    interface EditSettingsScreen {
    }
    interface GlobalH1 {
    }
    interface GlobalH2 {
    }
    interface InitScreen {
    }
    interface LoadingGuestbookScreen {
    }
    interface PrintPhotoFailScreen {
        "error": string | undefined;
    }
    interface PrintPhotoSuccessScreen {
    }
    interface RootComponent {
    }
    interface StartGuestbookScreen {
        "height": number;
        "width": number;
    }
}
export interface CaptureCountdownScreenCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCaptureCountdownScreenElement;
}
export interface EditSettingsScreenCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLEditSettingsScreenElement;
}
export interface InitScreenCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLInitScreenElement;
}
export interface PrintPhotoFailScreenCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPrintPhotoFailScreenElement;
}
export interface PrintPhotoSuccessScreenCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPrintPhotoSuccessScreenElement;
}
export interface StartGuestbookScreenCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLStartGuestbookScreenElement;
}
declare global {
    interface HTMLCaptureCountdownScreenElementEventMap {
        "goToStartGuestbookScreen": any;
        "goToPrintPhotoSuccessScreen": any;
        "goToPrintPhotoFailScreen": string;
        "startCaptureCountdown": any;
    }
    interface HTMLCaptureCountdownScreenElement extends Components.CaptureCountdownScreen, HTMLStencilElement {
        addEventListener<K extends keyof HTMLCaptureCountdownScreenElementEventMap>(type: K, listener: (this: HTMLCaptureCountdownScreenElement, ev: CaptureCountdownScreenCustomEvent<HTMLCaptureCountdownScreenElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLCaptureCountdownScreenElementEventMap>(type: K, listener: (this: HTMLCaptureCountdownScreenElement, ev: CaptureCountdownScreenCustomEvent<HTMLCaptureCountdownScreenElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLCaptureCountdownScreenElement: {
        prototype: HTMLCaptureCountdownScreenElement;
        new (): HTMLCaptureCountdownScreenElement;
    };
    interface HTMLControlPanelScreenElement extends Components.ControlPanelScreen, HTMLStencilElement {
    }
    var HTMLControlPanelScreenElement: {
        prototype: HTMLControlPanelScreenElement;
        new (): HTMLControlPanelScreenElement;
    };
    interface HTMLEditSettingsScreenElementEventMap {
        "goToStartGuestbookScreen": any;
    }
    interface HTMLEditSettingsScreenElement extends Components.EditSettingsScreen, HTMLStencilElement {
        addEventListener<K extends keyof HTMLEditSettingsScreenElementEventMap>(type: K, listener: (this: HTMLEditSettingsScreenElement, ev: EditSettingsScreenCustomEvent<HTMLEditSettingsScreenElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLEditSettingsScreenElementEventMap>(type: K, listener: (this: HTMLEditSettingsScreenElement, ev: EditSettingsScreenCustomEvent<HTMLEditSettingsScreenElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLEditSettingsScreenElement: {
        prototype: HTMLEditSettingsScreenElement;
        new (): HTMLEditSettingsScreenElement;
    };
    interface HTMLGlobalH1Element extends Components.GlobalH1, HTMLStencilElement {
    }
    var HTMLGlobalH1Element: {
        prototype: HTMLGlobalH1Element;
        new (): HTMLGlobalH1Element;
    };
    interface HTMLGlobalH2Element extends Components.GlobalH2, HTMLStencilElement {
    }
    var HTMLGlobalH2Element: {
        prototype: HTMLGlobalH2Element;
        new (): HTMLGlobalH2Element;
    };
    interface HTMLInitScreenElementEventMap {
        "goToStartGuestbookScreen": any;
        "goToControlPanelScreen": any;
        "clickInitScreenEditSettingsButton": any;
    }
    interface HTMLInitScreenElement extends Components.InitScreen, HTMLStencilElement {
        addEventListener<K extends keyof HTMLInitScreenElementEventMap>(type: K, listener: (this: HTMLInitScreenElement, ev: InitScreenCustomEvent<HTMLInitScreenElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLInitScreenElementEventMap>(type: K, listener: (this: HTMLInitScreenElement, ev: InitScreenCustomEvent<HTMLInitScreenElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLInitScreenElement: {
        prototype: HTMLInitScreenElement;
        new (): HTMLInitScreenElement;
    };
    interface HTMLLoadingGuestbookScreenElement extends Components.LoadingGuestbookScreen, HTMLStencilElement {
    }
    var HTMLLoadingGuestbookScreenElement: {
        prototype: HTMLLoadingGuestbookScreenElement;
        new (): HTMLLoadingGuestbookScreenElement;
    };
    interface HTMLPrintPhotoFailScreenElementEventMap {
        "goToStartGuestbookScreen": any;
    }
    interface HTMLPrintPhotoFailScreenElement extends Components.PrintPhotoFailScreen, HTMLStencilElement {
        addEventListener<K extends keyof HTMLPrintPhotoFailScreenElementEventMap>(type: K, listener: (this: HTMLPrintPhotoFailScreenElement, ev: PrintPhotoFailScreenCustomEvent<HTMLPrintPhotoFailScreenElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLPrintPhotoFailScreenElementEventMap>(type: K, listener: (this: HTMLPrintPhotoFailScreenElement, ev: PrintPhotoFailScreenCustomEvent<HTMLPrintPhotoFailScreenElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLPrintPhotoFailScreenElement: {
        prototype: HTMLPrintPhotoFailScreenElement;
        new (): HTMLPrintPhotoFailScreenElement;
    };
    interface HTMLPrintPhotoSuccessScreenElementEventMap {
        "goToStartGuestbookScreen": any;
    }
    interface HTMLPrintPhotoSuccessScreenElement extends Components.PrintPhotoSuccessScreen, HTMLStencilElement {
        addEventListener<K extends keyof HTMLPrintPhotoSuccessScreenElementEventMap>(type: K, listener: (this: HTMLPrintPhotoSuccessScreenElement, ev: PrintPhotoSuccessScreenCustomEvent<HTMLPrintPhotoSuccessScreenElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLPrintPhotoSuccessScreenElementEventMap>(type: K, listener: (this: HTMLPrintPhotoSuccessScreenElement, ev: PrintPhotoSuccessScreenCustomEvent<HTMLPrintPhotoSuccessScreenElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLPrintPhotoSuccessScreenElement: {
        prototype: HTMLPrintPhotoSuccessScreenElement;
        new (): HTMLPrintPhotoSuccessScreenElement;
    };
    interface HTMLRootComponentElement extends Components.RootComponent, HTMLStencilElement {
    }
    var HTMLRootComponentElement: {
        prototype: HTMLRootComponentElement;
        new (): HTMLRootComponentElement;
    };
    interface HTMLStartGuestbookScreenElementEventMap {
        "startCaptureCountdown": any;
    }
    interface HTMLStartGuestbookScreenElement extends Components.StartGuestbookScreen, HTMLStencilElement {
        addEventListener<K extends keyof HTMLStartGuestbookScreenElementEventMap>(type: K, listener: (this: HTMLStartGuestbookScreenElement, ev: StartGuestbookScreenCustomEvent<HTMLStartGuestbookScreenElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLStartGuestbookScreenElementEventMap>(type: K, listener: (this: HTMLStartGuestbookScreenElement, ev: StartGuestbookScreenCustomEvent<HTMLStartGuestbookScreenElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLStartGuestbookScreenElement: {
        prototype: HTMLStartGuestbookScreenElement;
        new (): HTMLStartGuestbookScreenElement;
    };
    interface HTMLElementTagNameMap {
        "capture-countdown-screen": HTMLCaptureCountdownScreenElement;
        "control-panel-screen": HTMLControlPanelScreenElement;
        "edit-settings-screen": HTMLEditSettingsScreenElement;
        "global-h1": HTMLGlobalH1Element;
        "global-h2": HTMLGlobalH2Element;
        "init-screen": HTMLInitScreenElement;
        "loading-guestbook-screen": HTMLLoadingGuestbookScreenElement;
        "print-photo-fail-screen": HTMLPrintPhotoFailScreenElement;
        "print-photo-success-screen": HTMLPrintPhotoSuccessScreenElement;
        "root-component": HTMLRootComponentElement;
        "start-guestbook-screen": HTMLStartGuestbookScreenElement;
    }
}
declare namespace LocalJSX {
    interface CaptureCountdownScreen {
        "height"?: number;
        "onGoToPrintPhotoFailScreen"?: (event: CaptureCountdownScreenCustomEvent<string>) => void;
        "onGoToPrintPhotoSuccessScreen"?: (event: CaptureCountdownScreenCustomEvent<any>) => void;
        "onGoToStartGuestbookScreen"?: (event: CaptureCountdownScreenCustomEvent<any>) => void;
        "onStartCaptureCountdown"?: (event: CaptureCountdownScreenCustomEvent<any>) => void;
        "width"?: number;
    }
    interface ControlPanelScreen {
    }
    interface EditSettingsScreen {
        "onGoToStartGuestbookScreen"?: (event: EditSettingsScreenCustomEvent<any>) => void;
    }
    interface GlobalH1 {
    }
    interface GlobalH2 {
    }
    interface InitScreen {
        "onClickInitScreenEditSettingsButton"?: (event: InitScreenCustomEvent<any>) => void;
        "onGoToControlPanelScreen"?: (event: InitScreenCustomEvent<any>) => void;
        "onGoToStartGuestbookScreen"?: (event: InitScreenCustomEvent<any>) => void;
    }
    interface LoadingGuestbookScreen {
    }
    interface PrintPhotoFailScreen {
        "error"?: string | undefined;
        "onGoToStartGuestbookScreen"?: (event: PrintPhotoFailScreenCustomEvent<any>) => void;
    }
    interface PrintPhotoSuccessScreen {
        "onGoToStartGuestbookScreen"?: (event: PrintPhotoSuccessScreenCustomEvent<any>) => void;
    }
    interface RootComponent {
    }
    interface StartGuestbookScreen {
        "height"?: number;
        "onStartCaptureCountdown"?: (event: StartGuestbookScreenCustomEvent<any>) => void;
        "width"?: number;
    }
    interface IntrinsicElements {
        "capture-countdown-screen": CaptureCountdownScreen;
        "control-panel-screen": ControlPanelScreen;
        "edit-settings-screen": EditSettingsScreen;
        "global-h1": GlobalH1;
        "global-h2": GlobalH2;
        "init-screen": InitScreen;
        "loading-guestbook-screen": LoadingGuestbookScreen;
        "print-photo-fail-screen": PrintPhotoFailScreen;
        "print-photo-success-screen": PrintPhotoSuccessScreen;
        "root-component": RootComponent;
        "start-guestbook-screen": StartGuestbookScreen;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "capture-countdown-screen": LocalJSX.CaptureCountdownScreen & JSXBase.HTMLAttributes<HTMLCaptureCountdownScreenElement>;
            "control-panel-screen": LocalJSX.ControlPanelScreen & JSXBase.HTMLAttributes<HTMLControlPanelScreenElement>;
            "edit-settings-screen": LocalJSX.EditSettingsScreen & JSXBase.HTMLAttributes<HTMLEditSettingsScreenElement>;
            "global-h1": LocalJSX.GlobalH1 & JSXBase.HTMLAttributes<HTMLGlobalH1Element>;
            "global-h2": LocalJSX.GlobalH2 & JSXBase.HTMLAttributes<HTMLGlobalH2Element>;
            "init-screen": LocalJSX.InitScreen & JSXBase.HTMLAttributes<HTMLInitScreenElement>;
            "loading-guestbook-screen": LocalJSX.LoadingGuestbookScreen & JSXBase.HTMLAttributes<HTMLLoadingGuestbookScreenElement>;
            "print-photo-fail-screen": LocalJSX.PrintPhotoFailScreen & JSXBase.HTMLAttributes<HTMLPrintPhotoFailScreenElement>;
            "print-photo-success-screen": LocalJSX.PrintPhotoSuccessScreen & JSXBase.HTMLAttributes<HTMLPrintPhotoSuccessScreenElement>;
            "root-component": LocalJSX.RootComponent & JSXBase.HTMLAttributes<HTMLRootComponentElement>;
            "start-guestbook-screen": LocalJSX.StartGuestbookScreen & JSXBase.HTMLAttributes<HTMLStartGuestbookScreenElement>;
        }
    }
}
