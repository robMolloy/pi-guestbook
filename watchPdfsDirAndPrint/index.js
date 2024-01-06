const { exec } = require("child_process");
const chokidar = require("chokidar");

const delay = async (x) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), x);
  });
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
  const cmd = `lp -o landscape -o fit-to-page -o media=oe_photo-l_3.5x5in ${pdfPath}`;
  console.log(cmd);
  exc(cmd);
};

const main = async () => {
  let isReady = false;

  chokidar
    .watch("../files/pdfs")
    .on("ready", () => {
      isReady = true;
    })
    .on("all", async (event, pdfPath) => {
      if (isReady && event === "add") {
        await delay(10000);
        print(pdfPath);
      }
    });
};

main();
