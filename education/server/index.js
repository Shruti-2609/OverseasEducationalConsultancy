const express =require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const authRoutes=require("./authRoutes");
const dbConnect=require("./db");

const app=express();

dotenv.config();
app.use(express.json());
app.use(cors());

dbConnect();

app.use("/" , authRoutes);

//------------------------------- server listen --------
app.listen(process.env.PORT , console.log(process.env.PORT));