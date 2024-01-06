import { z } from 'zod';

const getUrls = () => {
  return {
    serverPrintImageEndpoint: `${localStorage.getItem('serverBaseUrl')}${localStorage.getItem('serverPrintImageEndpoint')}`,
    serverBackupImagesEndpoint: `${localStorage.getItem('serverBaseUrl')}${localStorage.getItem('serverBackupImagesEndpoint')}`,
    getBackupImagesEndPoint: `${localStorage.getItem('serverBaseUrl')}get-backup-images`,
    getBackupImagesList: `${localStorage.getItem('serverBaseUrl')}get-backup-images-list`,
    getPrintQueue: `${localStorage.getItem('serverBaseUrl')}get-print-queue`,
    getAvailableDiskSpace: `${localStorage.getItem('serverBaseUrl')}get-available-disk-space`,
  };
};

export const sendImageDataUrlToPrint = async (p: { imageDataUrl: string }) => {
  try {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), 3000);
    const resp = await fetch(getUrls().serverPrintImageEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: p.imageDataUrl }),
      signal: controller.signal,
    });
    const json = await resp.json();
    if (json.success === true) return { success: true } as const;
    return { success: false, error: 'response invalid' } as const;
  } catch (error) {
    return { success: false, error: error.name } as const;
  }
};

export const sendImageDataUrlsForBackup = async (p: { imageDataUrls: string[] }) => {
  try {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), 3000);
    const resp = await fetch(getUrls().serverBackupImagesEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageDataUrls: p.imageDataUrls }),
      signal: controller.signal,
    });
    const json = await resp.json();
    if (json.success === true) return { success: true } as const;
    return { success: false, error: 'response invalid' } as const;
  } catch (error) {
    return { success: false, error: error.name } as const;
  }
};

export const retrieveBackupImageDataUrls = async (k: string) => {
  try {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), 3000);

    const response = await fetch(getUrls().getBackupImagesEndPoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ backupImageDirectory: k }),
      signal: controller.signal,
    });
    const json = await response.json();
    return z.array(z.string()).safeParse(json);
  } catch (e) {
    return { success: false } as const;
  }
};

export const retrieveBackupImageList = async () => {
  try {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), 3000);

    const response = await fetch(getUrls().getBackupImagesList, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
    });
    const json = await response.json();
    return z.array(z.string()).safeParse(json);
  } catch (e) {
    return { success: false } as const;
  }
};

export const retrievePrintQueue = async () => {
  try {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), 3000);

    const response = await fetch(getUrls().getPrintQueue, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
    });
    const json = await response.json();
    const parseResponse = z.object({ success: z.boolean(), data: z.string().optional() }).safeParse(json);
    return parseResponse.success && parseResponse.data.success
      ? ({ success: true, data: parseResponse.data.data } as const)
      : ({ success: false, data: 'print queue response does not match expected data structure' } as const);
  } catch (e) {
    return { success: false } as const;
  }
};

export const retrieveAvailableDiskSpace = async () => {
  try {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), 3000);

    const response = await fetch(getUrls().getAvailableDiskSpace, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
    });
    const text = await response.text();
    const parseResponse = z.string().safeParse(text);
    return parseResponse.success
      ? ({ success: true, data: `Available disk space: ${parseResponse.data}` } as const)
      : ({ success: false, data: 'Available disk space does not match expected data structure' } as const);
  } catch (e) {
    console.error(`sendImageDataUrlToPrint.ts:${/*LL*/ 105}`, { e });

    return { success: false } as const;
  }
};
