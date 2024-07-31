const cloud = require('cloudinary').v2;
const streamifier = require('streamifier');
const fs = require('fs');
const ApiError = require('../src/middleware/api.error');
const MESSAGES = require('../src/config/options/messages.options');
const resCode = MESSAGES.resCode;
cloud.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports.deleteFile = async (file) =>{
  const publicId = file.substring(
    file.lastIndexOf("/") + 1,
    file.lastIndexOf(".")
  );
  console.log("file====", file);
  console.log("publicId", publicId);
  return new Promise((resolve, rejects) => {
    cloud.uploader.destroy(publicId, function (err, result) {
      if (err) {
        console.error("err", err);
        rejects(err);
        throw new ApiError('File delete fail', resCode.HTTP_BAD_REQUEST);
      } else {
        console.info("result", result);
        resolve(result);
      }
    });
  });
};

module.exports.uploadFile = async (path) => {
  return new Promise((resolve, rejects) => {
    cloud.uploader.upload_large(
      path,
      {
        resource_type: "auto",
        chunk_size: 6000000,
      },
      function (error, result) {
        if (error) {
          console.error("error", error);
          throw new ApiError('File upload fail', resCode.HTTP_BAD_REQUEST);
        } else {
          console.log("result", result);
          resolve(result.url);
        }
        if (fs.existsSync(path)) {
          fs.unlinkSync(path);
        }
      }
    );
  });
};
module.exports.uploadFromBuffer = (buffer) => {

  return new Promise((resolve, reject) => {

    let stream = cloud.uploader.upload_stream(
      {
        // folder:''
      },
      (error, result) => {
        if (result) {
          console.log("result--", result);
          resolve(result.secure_url.split('upload/')[1]);
        } else {
          throw new ApiError('File upload fail', resCode.HTTP_BAD_REQUEST);
          reject(error);
        }
      }
    );
    streamifier.createReadStream(buffer).pipe(stream);
  });
};