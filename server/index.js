import express from 'express';
const app=express();

import cors from 'cors'
import bodyParser from 'body-parser'

//components
import Connection from './connection/db.js'
import DefaultData from './default.js'
import Route from './routes/route.js'


app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))
app.use('/',Route)

Connection()
const PORT=8000;
app.listen(PORT,()=>console.log(`Server is running successfully on port ${PORT}`));

DefaultData()