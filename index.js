import express from 'express';
import * as dotenv from 'dotenv'
dotenv.config()
import bodyParser from 'body-parser';
import cors from 'cors'

import productsRoutes from './routes/products.js'


const app=express();
const PORT=process.env.SERVER_PORT;
app.use(cors());
app.use(express.json())

app.get("/", (req,res)=>{
    res.send('Hello Home2');
})

app.use('/products', productsRoutes)
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.listen(PORT,()=> console.log(`Server running on port : http://localhost:${PORT}`));