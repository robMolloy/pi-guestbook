const express = require("express");
const fs = require("fs").promises;
const bodyParser = require("body-parser");
const cors = require("cors");
const sharp = require("sharp");

const port = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "500mb" }));

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

app.post("/save-square-image", async (req, res) => {
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
  const imageName = `../files/squareImages/${new Date().toISOString()}.png`;

  try {
    await fs.writeFile(imageName, imageData, "base64");
    console.log(`${imageName} uploaded successfully`);
    res
      .status(200)
      .json({ success: true, message: "File uploaded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error writing the file" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
