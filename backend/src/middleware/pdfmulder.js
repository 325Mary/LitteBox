const multer = require("multer");


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./public/uploads");
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + "-" + file.originalname);
    }
});

const fileFilter = (req, file, callback) =>{
    const allowedMimeTypes= ["application/pdf", "image/png", "image/jpg", "image/jpeg"]

    if (allowedMimeTypes.includes(file.mimetype))
    {
        callback(null, true)
    }
    else {
        callback(new Error("solo se permite archivos pdf y jpg"), false)
    }
    
}

const pdfAndImgUpload = multer({
    storage: storage,
    fileFilter: fileFilter
});

module.exports = pdfAndImgUpload;
