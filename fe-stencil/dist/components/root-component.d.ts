import type { Components, JSX } from "../types/components";

interface RootComponent extends Components.RootComponent, HTMLElement {}
export const RootComponent: {
    prototype: RootComponent;
    new (): RootComponent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
