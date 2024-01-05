import { z } from 'zod';
export declare const sendImageDataUrlToPrint: (p: {
    imageDataUrl: string;
}) => Promise<{
    readonly success: true;
    readonly error?: undefined;
} | {
    readonly success: false;
    readonly error: any;
}>;
export declare const sendImageDataUrlsForBackup: (p: {
    imageDataUrls: string[];
}) => Promise<{
    readonly success: true;
    readonly error?: undefined;
} | {
    readonly success: false;
    readonly error: any;
}>;
export declare const retrieveBackupImageDataUrls: (k: string) => Promise<z.SafeParseSuccess<string[]> | z.SafeParseError<string[]> | {
    readonly success: false;
}>;
export declare const retrieveBackupImageList: () => Promise<z.SafeParseSuccess<string[]> | z.SafeParseError<string[]> | {
    readonly success: false;
}>;
export declare const retrievePrintQueue: () => Promise<{
    readonly success: true;
    readonly data: string;
} | {
    readonly success: false;
    readonly data: "print queue response does not match expected data structure";
} | {
    readonly success: false;
    readonly data?: undefined;
}>;
export declare const retrieveAvailableDiskSpace: () => Promise<{
    readonly success: true;
    readonly data: `Available disk space: ${string}`;
} | {
    readonly success: false;
    readonly data: "Available disk space does not match expected data structure";
} | {
    readonly success: false;
    readonly data?: undefined;
}>;
