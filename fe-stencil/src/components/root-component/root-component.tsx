import { Component, Element, h, Listen, State } from '@stencil/core';

// const getMaxVideoMediaDimensions = async (p: { aspectRatio: number; ideal: number }) => {
// const getMaxVideoMediaDimensions = async () => {
//   // const videoMedia = await navigator.mediaDevices.getUserMedia({
//   //   audio: false,
//   //   video: { width: { ideal: p.ideal }, height: { ideal: p.ideal } },
//   // });

//   // const tracks = videoMedia.getVideoTracks();
//   // const settings = tracks.find(x => !!x).getSettings();

//   // // const wMax = settings.width;
//   // // const hMax = settings.height;
//   // // // const { width, height } = (() => {
//   // // //   if (wMax / p.aspectRatio <= hMax) return { width: wMax, height: wMax / p.aspectRatio };
//   // // //   if (hMax * p.aspectRatio <= wMax) return { width: hMax * p.aspectRatio, height: hMax };
//   // // // })();

//   // tracks.forEach(track => track.stop());

//   const rtn = {
//     audio: false,
//     video: { width: { ideal: 720 }, height: { ideal: 480 } },
//   };

//   return rtn;
// };

const getStreamData = (p: {
  audio?: boolean;
  video: {
    width: { ideal: number };
    height: { ideal: number };
  };
}): Promise<MediaProvider> => {
  return new Promise((resolve, reject) => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: { ideal: p.video.width.ideal }, height: { ideal: p.video.height.ideal } } })
      .then(function (initStream) {
        const stream = initStream as unknown as MediaProvider;
        resolve(stream);
      })
      .catch(function (error) {
        window.alert('Error accessing webcam:');
        console.error('Error accessing webcam:', error);
        reject();
      });
  });
};

type TScreenStatus =
  | 'init_screen'
  | 'edit_settings_screen'
  | 'start_guestbook_screen'
  | 'capture_countdown_screen'
  | 'print_photo_success_screen'
  | 'print_photo_fail_screen'
  | 'control_panel_screen';
declare global {
  interface Window {
    streamData: MediaProvider | undefined;
  }
}

@Component({
  tag: 'root-component',
  shadow: true,
})
export class RootComponent {
  @State() screenStatus: TScreenStatus = 'init_screen';
  @State() streamDims:
    | {
        audio: boolean;
        video: {
          width: {
            ideal: number;
          };
          height: {
            ideal: number;
          };
        };
      }
    | undefined = undefined;
  @State() streamDataIsReady: boolean = false;
  @State() sendPhotoErrorName: string | undefined = undefined;

  @Listen('clickInitScreenEditSettingsButton')
  clickSettingsButtonHandler() {
    this.screenStatus = 'edit_settings_screen';
  }
  @Listen('goToStartGuestbookScreen')
  goToStartGuestbookScreen() {
    this.screenStatus = 'start_guestbook_screen';
  }
  @Listen('goToPrintPhotoSuccessScreen')
  goToPrintPhotoSuccessScreen() {
    this.screenStatus = 'print_photo_success_screen';
  }
  @Listen('goToPrintPhotoFailScreen')
  goToPrintPhotoFailScreen(e: CustomEvent<string>) {
    this.sendPhotoErrorName = e.detail;
    this.screenStatus = 'print_photo_fail_screen';
  }
  @Listen('goToControlPanelScreen')
  goToControlPanelScreen() {
    this.screenStatus = 'control_panel_screen';
  }

  @Listen('startCaptureCountdown')
  startCaptureCountdown() {
    this.screenStatus = 'capture_countdown_screen';
  }

  @Element() el: HTMLElement;

  constructor() {
    (async () => {
      // this.streamDims = await getMaxVideoMediaDimensions({ ideal: 1080, aspectRatio: 6 / 4 });
      // this.streamDims = await getMaxVideoMediaDimensions();

      window.streamData = await getStreamData({
        video: {
          width: { ideal: 720 },
          height: { ideal: 1080 },
        },
      });
      this.streamDataIsReady = true;
    })();
  }

  render() {
    return (
      <div>
        {/* this.screenStatus: {this.screenStatus} */}
        {this.screenStatus === 'init_screen' && <init-screen />}
        {this.screenStatus === 'edit_settings_screen' && <edit-settings-screen />}
        {this.screenStatus === 'control_panel_screen' && <control-panel-screen />}
        {this.screenStatus === 'start_guestbook_screen' && !this.streamDataIsReady && <loading-guestbook-screen />}
        {this.screenStatus === 'start_guestbook_screen' && this.streamDataIsReady && <start-guestbook-screen width={1080} height={720} />}
        {this.screenStatus === 'capture_countdown_screen' && <capture-countdown-screen width={1080} height={720} />}
        {this.screenStatus === 'print_photo_success_screen' && <print-photo-success-screen />}
        {this.screenStatus === 'print_photo_fail_screen' && <print-photo-fail-screen error={this.sendPhotoErrorName} />}
      </div>
    );
  }
}
