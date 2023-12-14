const chokidar = require("chokidar");

const imgToPDF = require("image-to-pdf");
const fs = require("fs");

const { promisify } = require("util");
const sizeOf = promisify(require("image-size"));

const getFileNameFromFilePath = (fn) => {
  return fn.split("/").slice(-1)[0].split(".").slice(0, -1).join(".");
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

const imageToPdf = async (imagePath) => {
  const imagePaths = [imagePath];
  const imageName = getFileNameFromFilePath(imagePath);
  const pdfPath = `../files/pdfs/${imageName}.pdf`;

  const paperDimensions = true ? [88.9, 127] : imgToPDF.sizes.A0;
  await imgToPDF(imagePaths, imgToPDF.sizes.A0).pipe(
    fs.createWriteStream(pdfPath)
  );

  return pdfPath;
};

const main = async () => {
  let isReady = false;

  chokidar
    .watch("../files/images")
    .on("ready", () => {
      isReady = true;
    })
    .on("all", async (event, path) => {
      if (isReady) {
        console.log(path);
        console.log(await getImageDimensions(path));
        imageToPdf(path);
      }
    });
};

main();
