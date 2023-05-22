import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", router()) // as router middleware or

app.listen(process.env.PORT, () => {console.log(`Cyber Auth Server Listening On Port ${process.env.PORT}`)});