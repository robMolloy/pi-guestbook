const chokidar = require("chokidar");
const sharp = require("sharp");
const gm = require("gm").subClass({ imageMagick: true });

const { promisify } = require("util");
const sizeOf = promisify(require("image-size"));

const getFileNameFromFilePath = (fn) => {
  return fn.split("/").slice(-1)[0].split(".").slice(0, -1).join(".");
};
const getFileExtensionFromFilePath = (fn) => {
  return fn.split(".").slice(-1)[0];
};

const getImageDimensions = async (x) => {
  const imageXY = await new Promise((res) => {
    sizeOf(x)
      .then((dimensions) => res(dimensions))
      .catch((err) => console.error(err));
  });
  return {
    height: imageXY.height,
    width: imageXY.width,
    ratio: imageXY.height / imageXY.width,
  };
};

const convertSquareImageToPdfReadyImage = async (
  imagePath,
  pdfReadyImagePath
) => {
  const imageDimensions = await getImageDimensions(imagePath);
  const currentHeight = imageDimensions.height;
  const newHeight = Math.floor((currentHeight / 3.5) * 5);
  const heightDiff = newHeight - currentHeight;

  sharp(imagePath)
    .extend({
      bottom: heightDiff,
      background: { r: 255, g: 255, b: 255, alpha: 1 }, // blue background
    })
    .toFile(pdfReadyImagePath, async (err, info) => {
      console.log(info);
      if (err) {
        console.error(err);
      } else {
        console.log(
          `Image successfully processed and saved to ${pdfReadyImagePath}`
        );
        const newImageDimensions = await getImageDimensions(pdfReadyImagePath);
        console.log(newImageDimensions);
      }
    });
};

const main = async () => {
  let isReady = false;

  chokidar
    .watch("../files/images")
    .on("ready", () => {
      isReady = true;
    })
    .on("all", async (event, imagePath) => {
      if (isReady && event === "add") {
        const imageName = getFileNameFromFilePath(imagePath);
        const imageExtension = getFileExtensionFromFilePath(imagePath);
        const pdfReadyImagePath = `../files/pdfReadyImages/${imageName}.${imageExtension}`;
        convertSquareImageToPdfReadyImage(imagePath, pdfReadyImagePath);
      }
    });
};

main();
