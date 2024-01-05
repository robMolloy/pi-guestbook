export declare class ViewBackupsScreen {
    imageListStatus: 'loading' | 'error' | 'loaded';
    imageList: {
        [k: string]: string[] | undefined;
    };
    printQueue: string;
    availableDiskSpace: string;
    displayImageListFromImageListResponse: (imageListResponse: {
        data: string[];
    }) => void;
    constructor();
    render(): any;
}
