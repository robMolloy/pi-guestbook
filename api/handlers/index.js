const {
  getImageDataFromImageDataUrl,
  getImageDimensionsFromImageDataUrl,
  saveImageFromImageData,
  imageToPdf,
  print,
} = require("../helpers/index");
const sharp = require("sharp");

const saveSquareImageHandler = async (req, res) => {
  const imageDataUrl = req.body.image;
  const imageDimensions = await getImageDimensionsFromImageDataUrl(
    imageDataUrl
  );

  const isSquare = imageDimensions.ratio > 0.9 || imageDimensions.ratio < 1.1;
  if (!isSquare)
    return res
      .status(500)
      .json({ success: false, message: "Image is not square" });

  const imageData = getImageDataFromImageDataUrl(imageDataUrl);
  const imagePath = `../files/squareImages/${new Date().toISOString()}.png`;

  const resp = await saveImageFromImageData(imagePath, imageData);
  const responseCode = resp.success ? 200 : 500;
  return res.status(responseCode).json(resp);
};

const savePdfPrintImageHandler = async (req, res) => {
  const imageDataUrl = req.body.image;
  const pdfPath = `../files/pdfs/${new Date().toISOString()}.pdf`;

  await imageToPdf(imageDataUrl, pdfPath);

  try {
    print(pdfPath);
  } catch (error) {
    console.log("error");
    return res.status(500).json({ success: false, message: "can't print" });
  }

  return res.json({ success: true, message: "success" });
};

const resizeSavePdfPrintImageHandler = async (req, res) => {
  const imageDataUrl = req.body.image;
  const data = Buffer.from(imageDataUrl.split(",")[1], "base64");
  const pdfPath = `../files/pdfs/${new Date().toISOString()}.pdf`;

  const { width, height } = await getImageDimensionsFromImageDataUrl(
    imageDataUrl
  );

  const resizedImageDataUrl = await new Promise((resolve) => {
    sharp(data)
      .resize(width / 4, height / 4)
      .toBuffer((err, buffer) => {
        if (err) {
          return res
            .status(500)
            .json({ success: false, message: "can't print" });
        } else {
          const base64Image = buffer.toString("base64");

          resolve(`data:image/png;base64,${base64Image}`);
        }
      });
  });

  await imageToPdf(resizedImageDataUrl, pdfPath);

  try {
    print(pdfPath);
  } catch (error) {
    console.log("error");
    return res.status(500).json({ success: false, message: "can't print" });
  }
  return res.status.json({ success: true, message: "success" });
};

module.exports = {
  saveSquareImageHandler,
  savePdfPrintImageHandler,
  resizeSavePdfPrintImageHandler,
};
