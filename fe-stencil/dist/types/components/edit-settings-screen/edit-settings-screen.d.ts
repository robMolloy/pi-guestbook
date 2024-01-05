import { EventEmitter } from '../../stencil-public-runtime';
type TServerLiveStatus = 'uninitialised' | 'initialising' | 'awaiting_response' | 'no_base_url_provided' | 'server_not_found' | 'server_found' | 'server_found_invalid_response';
export declare class EditSettingsScreen {
    goToStartGuestbookScreen: EventEmitter;
    serverLiveStatus: TServerLiveStatus;
    serverLiveStatusColorIndicator: 'orange' | 'red' | 'green';
    serverBaseUrl: string;
    paperSizeKey: string;
    settings: {
        [k: string]: string | number | null;
    };
    handleServerLiveStatus(): Promise<void>;
    handleSave(): Promise<void>;
    constructor();
    render(): any;
}
export {};
