const express=require("express");
const app=express();

require('dotenv').config()
const cors=require('cors')

//working with POST and PUT requests
app.use(express.json()) //recognize incoming request as a JSON object
app.use(express.urlencoded({extended: true}));//recognize incoming requests as string or array

//working with cross origin requests
app.use(cors());

app.use("/sendgrid",require("./mails/sendgrid"))

app.listen(3000,()=>{console.log("Server is listening on port 3000")});