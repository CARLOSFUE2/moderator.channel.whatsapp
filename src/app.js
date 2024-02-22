import  express   from 'express';
import  path   from 'path';
import  cookieParser  from 'cookie-parser';
import logger from 'morgan';
import 'dotenv/config'

import mongoose from './configurations/database';
import cors from './configurations/cors'
import indexRouter from '../routes/index';
import usersRouter from '../routes/users';

const app = express();
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


const qrcode = require("qrcode-terminal")

const { Client, LocalAuth } = require("whatsapp-web.js")

const client = new Client({
   authStrategy: new LocalAuth(),
  
})


client.on("authenticated", (session) => {
    console.log(session);
  // Save the session object however you prefer.
  // Convert it to json, save it to a file, store it in a database...
})
 
 
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true })
})

client.on("ready", () => {
    // console.log("Client is ready!")    
})

    //client.sendMessage("584243148869", "El s-kibo e nuetlo").then((res) => //console.log(res)).catch((e) => console.log(e))

client.on("message", (message) => {
  
  console.log(message)
})

 

client.initialize()
 

app.set("port", 3010)

const server = app.listen(app.get("port"), () => {
  console.log("server on port " + app.get("port"))
}) 

module.exports = app;
