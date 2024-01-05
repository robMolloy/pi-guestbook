import type { Components, JSX } from "../types/components";

interface CaptureCountdownScreen extends Components.CaptureCountdownScreen, HTMLElement {}
export const CaptureCountdownScreen: {
    prototype: CaptureCountdownScreen;
    new (): CaptureCountdownScreen;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
