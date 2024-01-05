import type { Components, JSX } from "../types/components";

interface InitScreen extends Components.InitScreen, HTMLElement {}
export const InitScreen: {
    prototype: InitScreen;
    new (): InitScreen;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
