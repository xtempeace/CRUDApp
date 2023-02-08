
import express, { application } from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import Routes from './routes/route.js';
import cors from 'cors';

import bodyParser from 'body-parser'; //

const app=express();

dotenv.config();//config() kae madad sae dotenv ko initializa kar diyae

app.use(bodyParser.json({extended:true}));//
app.use(bodyParser.urlencoded({extended:true}));//          //for decoding the URL

app.use(cors());//cors problem ko hum ess tarah sae through backend sae resolve karengae,cors() ko express kae through resolve kar rahae hai

//express ki madad sae routing karnae walae hai
///users
app.use('/',Routes);//backend sae routes call ho raha hai


const PORT=8000;

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

//calling Connection function
Connection(username,password);

//express server listen function sae banta hai
app.listen(PORT,()=>console.log(`Server is running successfully on PORT ${PORT}`));
