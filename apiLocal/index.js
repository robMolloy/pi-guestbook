const express = require("express");
const fs = require("fs").promises;

const port = 3000;
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json({ limit: "500mb" }));

app.post("/print-image", async (req, res) => {
  const imageDataUrl = req.body.image;
  const imageData = imageDataUrl.split(";base64,")[1];
  const imageName = `../files/images/${new Date().toISOString()}.png`;

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
