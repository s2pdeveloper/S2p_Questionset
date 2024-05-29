const MESSAGES = require('../../../models/helpers/MessagesHelper');
const OPTIONS = require('../../../config/Options');
const { generateResponse } = require('../../../config/Options');
const { resCode } = MESSAGES;
const AWSHelpers = require('../../../models/helpers/AWSHelpers');
const { generateCloudFrontUrl } = require('../../../models/helpers/UtilsHelper');

exports.postUpload = async (req, res) => {
  if (req.file) {
    res.success({
      data: req.file,
      cdn: generateCloudFrontUrl(req.file.key),
    });
  } else {
    const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
    res.serverError(errors);
    throw new Error(e);
  }
};

exports.removeUpload = async (req, res) => {
  try {
    await AWSHelpers.removeFile(req.body.filePath);
    res.success({
      message: MESSAGES.apiSuccessStrings.DELETED('Image'),
    });
  } catch (e) {
    const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
    res
      .status(resCode.HTTP_INTERNAL_SERVER_ERROR)
      .json(generateResponse(resCode.HTTP_INTERNAL_SERVER_ERROR, errors));
    throw new Error(e);
  }
};

// to download image
exports.convertToBase64 = async (req, res) => {
  try {
    // download the file via aws s3 here
    let splitPaths = req.query.filePath.split(`${process.env.CDN_WEB_STATIC}/`);
    let payload = {
      Bucket: s3Bucket,
      Key: splitPaths[1],
    };
    const metaData = await s3.getObject(payload).promise();
    metaData.fileSize = 0;
    if (metaData && metaData.ContentLength) {
      metaData.fileSize = (metaData.ContentLength / (1024 * 1024)).toPrecision(
        2
      );
      metaData.fileType = metaData.ContentType;
      req.body['fileType'] = metaData.ContentType;
    }
    const base64String = metaData.Body.toString('base64');
    const src = `data:${req.body.fileType};base64,${base64String}`;
    return res.json(generateResponse(resCode.HTTP_OK, { src, metaData }));
  } catch (e) {
    console.log(e);
    const errors = 'Oops! something went wrong.';
    res
      .status(resCode.HTTP_INTERNAL_SERVER_ERROR)
      .json(generateResponse(resCode.HTTP_INTERNAL_SERVER_ERROR, errors));
  }
};

exports.getPostSignedURL = async (req, res) => {
  try {
    const filePath = `post/${Date.now()}-${req.query.fileName}`;
    const url = await AWSHelpers.generateSignedURL(filePath);
    res
      .status(resCode.HTTP_OK)
      .json(OPTIONS.genRes(resCode.HTTP_OK, { url, filePath }));
  } catch (e) {
    customErrorLogger(e);
    return res
      .status(resCode.HTTP_INTERNAL_SERVER_ERROR)
      .json(
        OPTIONS.genRes(
          resCode.HTTP_INTERNAL_SERVER_ERROR,
          MESSAGES.apiErrorStrings.SERVER_ERROR,
          MESSAGES.errorTypes.INTERNAL_SERVER_ERROR
        )
      );
  }
};

exports.deleteMedia = async (req, res) => {
  try {
    if (req.body.type) {
      await AWSHelpers.removeAllFiles(req.body.data);
    }
    return res.status(resCode.HTTP_OK).json(
      generateResponse(resCode.HTTP_OK, {
        message: MESSAGES.apiSuccessStrings.DELETED('Images'),
      })
    );
  } catch (e) {
    const errors = MESSAGES.apiErrorStrings.SERVER_ERROR;
    res
      .status(resCode.HTTP_INTERNAL_SERVER_ERROR)
      .json(generateResponse(resCode.HTTP_INTERNAL_SERVER_ERROR, errors));
    throw new Error(e);
  }
};
