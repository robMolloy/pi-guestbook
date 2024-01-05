import type { Components, JSX } from "../types/components";

interface EditSettingsScreen extends Components.EditSettingsScreen, HTMLElement {}
export const EditSettingsScreen: {
    prototype: EditSettingsScreen;
    new (): EditSettingsScreen;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
