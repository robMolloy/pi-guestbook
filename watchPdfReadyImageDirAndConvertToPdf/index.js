const fs = require("fs");
const chokidar = require("chokidar");

const imgToPDF = require("image-to-pdf");

const getFileNameFromFilePath = (fn) => {
  return fn.split("/").slice(-1)[0].split(".").slice(0, -1).join(".");
};

const imageToPdf = async (imagePath, pdfPath) => {
  const imagePaths = [imagePath];

  const paperDimensions = [88.9, 127];
  await imgToPDF(imagePaths, paperDimensions).pipe(
    fs.createWriteStream(pdfPath)
  );

  return pdfPath;
};
//

const main = async () => {
  let isReady = false;

  chokidar
    .watch("../files/pdfReadyImages")
    .on("ready", () => {
      isReady = true;
    })
    .on("all", async (event, imagePath) => {
      if (isReady && event === "add") {
        const imageName = getFileNameFromFilePath(imagePath);
        const pdfPath = `../files/pdfs/${imageName}.pdf`;

        imageToPdf(imagePath, pdfPath);
      }
    });
};

main();
