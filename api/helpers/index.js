const sharp = require("sharp");
const fs = require("fs");
const fsPromises = fs.promises;
const { exec } = require("child_process");

const imgToPDF = require("image-to-pdf");

const imageToPdf = async (imagePath, pdfPath, options = {}) => {
  const imagePaths = [imagePath];

  // const paperDimensions = [88.9, 127];
  const paperDimensions =
    options?.width && options?.height
      ? [options.width, options.height]
      : [152.4, 101.6];
  await imgToPDF(imagePaths, paperDimensions).pipe(
    fs.createWriteStream(pdfPath)
  );

  return pdfPath;
};

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

const exc = (x) => {
  exec(x, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
};

const print = (pdfPath) => {
  const cmd = `lp ${pdfPath}`;
  console.log(cmd);
  exc(cmd);
};

module.exports = {
  imageToPdf,
  getImageDataFromImageDataUrl,
  getImageDimensionsFromImageDataUrl,
  saveImageFromImageData,
  exc,
  print,
};
