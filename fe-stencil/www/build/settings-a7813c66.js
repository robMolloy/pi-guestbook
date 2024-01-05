const paperSizeTranslator = {
    '6x4': {
        label: '6 x 4',
        width: 6,
        height: 4,
        aspectRatio: 6 / 4,
        printImageEndpoint: 'save-pdf-print-6x4-image',
        backupImagesEndpoint: 'backup-images',
    },
    '3.5x5': {
        label: '3.5 x 5',
        width: 3.5,
        height: 5,
        aspectRatio: 3.5 / 5,
        printImageEndpoint: 'save-pdf-print-3.5x5-image',
        backupImagesEndpoint: 'backup-images',
    },
};
const getSettingsFromLocalStorage = () => {
    return {
        paperSizeKey: localStorage.getItem('paperSizeKey'),
        paperSizeLabel: localStorage.getItem('paperSizeLabel'),
        paperSizeWidth: localStorage.getItem('paperSizeWidth'),
        paperSizeHeight: localStorage.getItem('paperSizeHeight'),
        paperSizeAspectRatio: localStorage.getItem('paperSizeAspectRatio'),
        serverBaseUrl: localStorage.getItem('serverBaseUrl'),
        serverPrintImageEndpoint: localStorage.getItem('serverPrintImageEndpoint'),
        serverBackupImagesEndpoint: localStorage.getItem('serverBackupImagesEndpoint'),
    };
};
const setSettingsInLocalStorage = (p) => {
    localStorage.setItem('paperSizeKey', p.paperSizeKey);
    localStorage.setItem('paperSizeLabel', p.paperSizeLabel);
    localStorage.setItem('paperSizeWidth', p.paperSizeWidth);
    localStorage.setItem('paperSizeHeight', p.paperSizeHeight);
    localStorage.setItem('paperSizeAspectRatio', p.paperSizeAspectRatio);
    localStorage.setItem('serverBaseUrl', p.serverBaseUrl);
    localStorage.setItem('serverPrintImageEndpoint', p.serverPrintImageEndpoint);
    localStorage.setItem('serverBackupImagesEndpoint', p.serverBackupImagesEndpoint);
};

export { getSettingsFromLocalStorage as g, paperSizeTranslator as p, setSettingsInLocalStorage as s };

//# sourceMappingURL=settings-a7813c66.js.map