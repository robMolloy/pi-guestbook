type TScreenStatus = 'init_screen' | 'edit_settings_screen' | 'start_guestbook_screen' | 'capture_countdown_screen' | 'print_photo_success_screen' | 'print_photo_fail_screen' | 'control_panel_screen';
declare global {
    interface Window {
        streamData: MediaProvider | undefined;
    }
}
export declare class RootComponent {
    screenStatus: TScreenStatus;
    streamDims: {
        width: number;
        height: number;
    } | undefined;
    streamDataIsReady: boolean;
    sendPhotoErrorName: string | undefined;
    clickSettingsButtonHandler(): void;
    goToStartGuestbookScreen(): void;
    goToPrintPhotoSuccessScreen(): void;
    goToPrintPhotoFailScreen(e: CustomEvent<string>): void;
    goToControlPanelScreen(): void;
    startCaptureCountdown(): void;
    el: HTMLElement;
    constructor();
    render(): any;
}
export {};
