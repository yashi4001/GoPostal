const express=require('express');
const app=express();
const Mail=require("../models/mail")

var API_KEY = process.env.MAILGUN_API_KEY;
var DOMAIN = process.env.MAILGUN_DOMAIN_NAME;
var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

app.post("/send",(req,res)=>{
  const info=(req.body)
  const data = {
    from: `${info.name} ${info.email}`,
    to: `${info.rec}`,
    subject: `${info.subject}`,
    text: `${info.content}`
  };

  const mail={
    subject:info.subject,
    message:info.content,
    sender:info.email,
    recipient:new Array(info.rec),
    timestamp:new Date()
  }

  const newMail=new Mail(mail);
  newMail.save((err)=>{
    if(err) res.status(500).send("Internal server error"); 
  })
  
  mailgun.messages().send(data, (error, body) => {
    if(!error) res.status(200).send("Email sent successfully");
    else res.status(500).send("Internal server error");
  });
})

module.exports=app;
