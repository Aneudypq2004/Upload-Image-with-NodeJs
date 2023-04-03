import express, { json } from "express";
import dotenv from 'dotenv';
import upload from "./src/middleware/multer.js";
const app = express();
import fs from 'fs'

//Settings

dotenv.config()
app.set('view engine', 'ejs')
app.set('port', process.env.PORT || 3000);
app.set('views', './src/views');
app.use(express.static('./src/public'));



//Multer Eror

app.get('/', (req, res) => {


    const data = {

        name: "Upload Image"
    }
    res.render('index', { data })
})



app.post('/uploads', (req, res) => {

    upload(req, res, function (err) {

        if (err) {
            const error = new Error("The file is too heavy");
            res.json({ msg: error.message });

        } else {
            
            if (req.file) {
                res.render('download', { data: req.file });

            } else {
                res.json({ msg: 'File no support' });

            }

        }
    })

})

//Download Image

app.post('/download/:image', (req, res) => {
    const { image } = req.params
    res.download(`./src/public/uploads/${image}`)
})

//Delete Image to the server

app.post('/delete/:image', async (req, res) => {
    const { image } = req.params;

    await fs.unlink(`./src/public/uploads/${image}`, (err) => {

        if (err) {
            return err
        }
    })

    res.json({ msg: "SUCCESSFULLY DELETED" })

})



app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})






