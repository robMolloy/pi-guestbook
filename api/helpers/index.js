const sharp = require("sharp");
const fsPromises = require("fs").promises;

const getImageDataFromImageDataUrl = (imageDataUrl) => {
  return imageDataUrl.split(";base64,")[1];
};

const getImageDimensionsFromImageDataUrl = (imageDataUrl) => {
  return new Promise(async (resolve) => {
    const imageData = getImageDataFromImageDataUrl(imageDataUrl);

    const buffer = Buffer.from(imageData, "base64");

    const metadata = await sharp(buffer).metadata();
    const imgDims = {
      width: metadata.width,
      height: metadata.height,
      ratio: metadata.height / metadata.width,
    };

    resolve(imgDims);
  });
};

const saveImageFromImageData = async (imagePath, imageData) => {
  try {
    await fsPromises.writeFile(imagePath, imageData, "base64");
    console.log(`${imagePath} uploaded successfully`);

    return { success: true, message: "File uploaded successfully" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error writing the file" };
  }
};

module.exports = {
  getImageDataFromImageDataUrl,
  getImageDimensionsFromImageDataUrl,
  saveImageFromImageData,
};
