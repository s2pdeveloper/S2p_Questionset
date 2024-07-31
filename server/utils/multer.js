const multer = require('multer');

// Multer configuration for buffer storage
const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

module.exports = upload;