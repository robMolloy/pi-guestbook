import type { Components, JSX } from "../types/components";

interface LoadingGuestbookScreen extends Components.LoadingGuestbookScreen, HTMLElement {}
export const LoadingGuestbookScreen: {
    prototype: LoadingGuestbookScreen;
    new (): LoadingGuestbookScreen;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
