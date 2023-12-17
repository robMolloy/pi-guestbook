const { exec } = require("child_process");
const chokidar = require("chokidar");

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

const main = async () => {
  let isReady = false;

  chokidar
    .watch("../files/pdfs")
    .on("ready", () => {
      isReady = true;
    })
    .on("all", async (event, pdfPath) => {
      if (isReady && event === "add") {
        print(pdfPath);
      }
    });
};

main();
