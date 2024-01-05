import type { Components, JSX } from "../types/components";

interface GlobalH2 extends Components.GlobalH2, HTMLElement {}
export const GlobalH2: {
    prototype: GlobalH2;
    new (): GlobalH2;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
