const {
  getImageDataFromImageDataUrl,
  getImageDimensionsFromImageDataUrl,
  saveImageFromImageData,
  imageToPdf,
  print,
} = require("../helpers/index");

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

module.exports = { saveSquareImageHandler, savePdfPrintImageHandler };
