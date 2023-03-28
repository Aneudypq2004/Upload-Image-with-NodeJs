import express, { json } from "express";
import dotenv from 'dotenv';
import upload from "./src/middleware/multer.js";
const app = express();

//Settings

dotenv.config()
app.set('view engine', 'ejs')
app.set('port', process.env.PORT || 3000);
app.set('views', './src/views');
app.use(express.static('./src/public'));

//Routes



//Multer Eror

app.get('/', (req, res) => {


    const data = {
        name: "Upload Image",
        height: '20cm',
        width: '30'
    }
    res.render('index', { data })
})


app.post('/uploads', upload , (req, res) => {
    
    res,json({msg : "Everything is fine"});
} )



app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})






