import multer from "multer";
import sharp from "sharp";

import { v4 as uuidV4 } from "uuid";


const storage = multer.diskStorage({

    destination: 'src/public/uploads',

    filename: (req, file, cb) => {

        const mime = file.mimetype.split('/')[1];

        const ImageName = uuidV4() + '.' + mime;

        cb(null, ImageName)
    },


})


const upload = multer({
    storage,
    limits: { fileSize: 1000000 }

}).single('image')

export default upload;