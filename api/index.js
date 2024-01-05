const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const https = require("https");
const handlers = require("./handlers/index");

const port = 3005;
const app = express();

const safeCreateDir = (directoryPath) => {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(directoryPath)) return resolve(true);
    fs.mkdir(directoryPath, (err) => {
      if (err) {
        console.error("Error creating folder:", err);
        resolve(false);
      } else {
        console.log("Folder created successfully!");
        resolve(true);
      }
    });
  });
};
const init = async () => {
  await safeCreateDir("../files");
  await safeCreateDir("../files/backup-images");
  await safeCreateDir("../files/pdfReadyImages");
  await safeCreateDir("../files/pdfs");
  await safeCreateDir("../files/squareImages");
};
init();

const privateKey = fs.readFileSync("server.key", "utf8");
const certificate = fs.readFileSync("server.crt", "utf8");
const credentials = { key: privateKey, cert: certificate };

app.use(cors());
app.use(bodyParser.json({ limit: "500mb" }));

// app.use(express.static("../interfaceLocal/dist"));
app.use(express.static("../../pi-guestbook-stencil-web-components/www"));

app.get("/ping", handlers.ping);
app.post("/save-square-image", handlers.saveSquareImageHandler);

app.post("/save-pdf-print-image", handlers.savePdfPrintImageHandler);
app.post("/save-pdf-print-6x4-image", handlers.savePdfPrint6x4ImageHandler);

app.post("/backup-images", handlers.backupImagesHandler);
app.post("/get-backup-images", handlers.getBackupImagesHandler);
app.get("/get-backup-images-list", handlers.getBackupImagesListHandler);
app.get("/get-print-queue", handlers.getPrintQueueHandler);

app.post(
  "/resize-save-pdf-print-image",
  handlers.resizeSavePdfPrintImageHandler
);

// Create HTTPS server
const httpsServer = https.createServer(credentials, app);

// Start the server
httpsServer.listen(port, () => {
  console.log(`Server running on https://localhost:${port}`);
});
