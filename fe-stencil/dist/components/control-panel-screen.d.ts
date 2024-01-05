import type { Components, JSX } from "../types/components";

interface ControlPanelScreen extends Components.ControlPanelScreen, HTMLElement {}
export const ControlPanelScreen: {
    prototype: ControlPanelScreen;
    new (): ControlPanelScreen;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
