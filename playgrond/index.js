const chokidar = require("chokidar");
const { exec } = require("child_process");

const imgToPDF = require("image-to-pdf");
const fs = require("fs");

const { promisify } = require("util");
const sizeOf = promisify(require("image-size"));
const resizeCrop = require("resize-crop");
const gm = require("gm").subClass({ imageMagick: "7+" });
const im = require("imagemagick");

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

const resize = async (fileName, resizeFileName, newImageDimensions) => {
  return new Promise((res) => {
    im.crop(
      {
        srcPath: fileName,
        dstPath: resizeFileName,
        width: newImageDimensions.width,
        height: newImageDimensions.height,
        quality: 1,
      },
      function (err, stdout, stderr) {
        if (!err) return res(true);
        console.log(err);
      }
    );
  });
};

const imageToPdf = async (imageName, pdfName) => {
  const pages = [imageName];

  await imgToPDF(pages, imgToPDF.sizes.A4H).pipe(fs.createWriteStream(pdfName));

  return pdfName;
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

/*

const main = async () => {
	const fileName = 'files/lush-green-forest-neblzag5t76yolal.jpg';
	const imageDimensions = await getImageDimensions(fileName);
	console.log(imageDimensions);
	
	const pdf = await imageToPdf(fileName)
	console.log(pdf)
	
	let isReady = false;
	
	chokidar.watch('./files').on('ready', () => {
		isReady = true;
		console.log('is ready')
	}).on('all', (event, path, ...other) => {
		if(isReady){
			console.log(event, path, other);
			const command = "lp ./" + path
			console.log(command)
			exc(command)
		}
	});
}*/

const main = async () => {
  const paperDimensionsArr = imgToPDF.sizes.A4H;
  const paperDimensions = {
    width: paperDimensionsArr[0],
    height: paperDimensionsArr[1],
    ratio: paperDimensionsArr[1] / paperDimensionsArr[0],
  };

  const fileName = "files/lush-green-forest-neblzag5t76yolal.jpg";
  const resizeFileName = fileName + ".resize.jpg";
  const pdfName = resizeFileName + ".pdf";

  const imageDimensions = await getImageDimensions(fileName);
  console.log(paperDimensions);
  console.log(imageDimensions);

  const newImageDimensions = {
    height: Math.floor(imageDimensions.width * paperDimensions.ratio),
    width: imageDimensions.width,
  };

  console.log(newImageDimensions);

  await resize(fileName, resizeFileName, newImageDimensions);
  await imageToPdf(resizeFileName, pdfName);

  const command = "lp ./" + pdfName;
  console.log(command);
  exc(command);
};

main();
