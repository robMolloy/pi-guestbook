import { Component, h, State } from '@stencil/core';
import { retrieveAvailableDiskSpace, retrieveBackupImageDataUrls, retrieveBackupImageList, retrievePrintQueue, sendImageDataUrlToPrint } from '../../utils';

@Component({
  tag: 'control-panel-screen',
  styleUrl: '../../styles/daisyUi.css',
  shadow: true,
})
export class ViewBackupsScreen {
  @State() imageListStatus: 'loading' | 'error' | 'loaded' = 'loading';
  @State() imageList: { [k: string]: string[] | undefined } = {};
  @State() printQueue: string = '';
  @State() availableDiskSpace: string = '';

  displayImageListFromImageListResponse = (imageListResponse: { data: string[] }) => {
    const imageList = {};
    imageListResponse.data.forEach(x => (imageList[x] = undefined));

    this.imageList = imageList;
    this.imageListStatus = 'loaded';
  };
  constructor() {
    (async () => {
      const imageListResponse = await retrieveBackupImageList();
      if (imageListResponse?.success !== true) return (this.imageListStatus = 'error');
      this.displayImageListFromImageListResponse(imageListResponse);

      const printQueueResponse = await retrievePrintQueue();
      this.printQueue = printQueueResponse.success ? printQueueResponse.data : 'could not find the print queue data...';

      const availableDiskSpace = await retrieveAvailableDiskSpace();
      this.availableDiskSpace = availableDiskSpace.success ? availableDiskSpace.data : 'available disk space does not match expected data structure';
    })();
  }

  render() {
    return (
      <div>
        <global-h2>Available disk space</global-h2>
        {this.availableDiskSpace}
        <global-h2>Print queue</global-h2>
        {this.printQueue}
        <global-h2>Image list</global-h2>
        {this.imageListStatus === 'loading' && <div>loading...</div>}
        {this.imageListStatus === 'error' && <div style={{ backgroundColor: 'red' }}>error</div>}
        {this.imageListStatus === 'loaded' &&
          Object.entries(this.imageList).map(([k, v]) => (
            <div style={{ padding: '10px' }}>
              <div>
                {k}
                <button
                  class="btn btn-primary"
                  onClick={async () => {
                    const resp = await retrieveBackupImageDataUrls(k);
                    if (resp?.success !== true) return (this.imageListStatus = 'error');

                    this.imageList[k] = resp.data;
                    this.imageList = { ...this.imageList };
                    this.imageListStatus = 'loaded';
                  }}
                >
                  load images
                </button>
              </div>
              {v !== undefined && (
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                  {v.map(imageDataUrl => (
                    <div
                      onClick={() => {
                        sendImageDataUrlToPrint({ imageDataUrl });
                      }}
                      style={{
                        minWidth: '175px',
                        minHeight: '175px',
                        backgroundImage: `url('${imageDataUrl}')`,
                        backgroundSize: 'cover',
                        backgroundposition: 'center',
                        border: '1px solid black',
                      }}
                    ></div>
                  ))}
                </div>
              )}
            </div>
          ))}
      </div>
    );
  }
}
