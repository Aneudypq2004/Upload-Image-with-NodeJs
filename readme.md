# Image Uploads

Project to improve my skills in nodeJS, I use multer , that is a middleware of node to upload files to the server




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

1. Dowload Repository or git pull to the project
2. Open the editor and run the command ``` npm install ```
3. Run ``` npm run dev ``` to start the project
4. Run ``` npm run build ``` to use tailwind and change the styles of the project
5. Go to http://localhost:3000 to see the project


> Made by [Aneudypq](https://www.instagram.com/aneudypq) :heart:


> #Learning Node


