# Image Uploads

Project to improve my skills in nodeJS, I use multer , is a middleware of node to upload images.


```js
 const storage = multer.diskStorage({

    destination: 'src/public/uploads',

    filename: (req, file, cb) => {

        const mime = file.mimetype.split('/')[1];

        const ImageName = uuidV4() + '.' + mime;

        cb(null, ImageName)
    },

})

```





> Made by [Aneudypq](https://www.instagram.com/aneudypq)


> #Learning Node


