import type { Components, JSX } from "../types/components";

interface GlobalH1 extends Components.GlobalH1, HTMLElement {}
export const GlobalH1: {
    prototype: GlobalH1;
    new (): GlobalH1;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
