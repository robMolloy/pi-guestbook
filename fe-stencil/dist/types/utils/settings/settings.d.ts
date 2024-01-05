export declare const paperSizeTranslator: {
    readonly '6x4': {
        readonly label: "6 x 4";
        readonly width: 6;
        readonly height: 4;
        readonly aspectRatio: number;
        readonly printImageEndpoint: "save-pdf-print-6x4-image";
        readonly backupImagesEndpoint: "backup-images";
    };
    readonly '3.5x5': {
        readonly label: "3.5 x 5";
        readonly width: 3.5;
        readonly height: 5;
        readonly aspectRatio: number;
        readonly printImageEndpoint: "save-pdf-print-3.5x5-image";
        readonly backupImagesEndpoint: "backup-images";
    };
};
export declare const getSettingsFromLocalStorage: () => {
    paperSizeKey: string;
    paperSizeLabel: string;
    paperSizeWidth: string;
    paperSizeHeight: string;
    paperSizeAspectRatio: string;
    serverBaseUrl: string;
    serverPrintImageEndpoint: string;
    serverBackupImagesEndpoint: string;
};
export declare const setSettingsInLocalStorage: (p: {
    paperSizeKey: string;
    paperSizeLabel: string;
    paperSizeWidth: string;
    paperSizeHeight: string;
    paperSizeAspectRatio: string;
    serverBaseUrl: string;
    serverPrintImageEndpoint: string;
    serverBackupImagesEndpoint: string;
}) => void;
