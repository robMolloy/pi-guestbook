import { EventEmitter } from '../../stencil-public-runtime';
export declare class CaptureCountdownScreen {
    width: number;
    height: number;
    countdownInt: number | undefined;
    videoElement: HTMLVideoElement | undefined;
    imageDataUrls: [string | undefined, string | undefined, string | undefined, string | undefined];
    selectedImageDataUrl: string | undefined;
    captureSequenceStatus: 'initial' | 'countdown' | 'capturing' | 'selecting';
    isFlash: boolean;
    goToStartGuestbookScreen: EventEmitter;
    goToPrintPhotoSuccessScreen: EventEmitter;
    goToPrintPhotoFailScreen: EventEmitter<string>;
    startCaptureCountdown: EventEmitter;
    el: HTMLElement;
    captureSequence(p: {
        videoElement: HTMLVideoElement;
    }): Promise<void>;
    componentDidLoad(): void;
    render(): any;
}
