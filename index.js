import express from "express";
import dotenv from "dotenv";
import createConnection from "./Database/Db.js";
import { RegisterRouter } from "./Routes/Register.js";
dotenv.config();
import cors from 'cors';

const app = express();
const port = process.env.PORT;


createConnection()
app.use(express.json())

app.use('/',RegisterRouter)
app.use(cors())


//Server Connecting
app.listen(port, () => {
  try {
    console.log(`Your Port is Successfully connected to ${port}`);
  } catch (error) {
    console.log("Problem found in connecting with port");
  }
});
