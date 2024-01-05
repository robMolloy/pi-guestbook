export declare const getServerLiveStatus: () => Promise<{
    readonly success: false;
    readonly status: "no_base_url_provided";
} | {
    readonly success: false;
    readonly status: "server_not_found";
} | {
    readonly success: false;
    readonly status: "server_found_invalid_response";
} | {
    readonly success: true;
    readonly status: "server_found";
}>;
