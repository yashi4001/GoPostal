const express=require('express');
const app=express();

var API_KEY = process.env.MAILGUN_API_KEY;
var DOMAIN = process.env.MAILGUN_DOMAIN_NAME;
var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

app.post("/send",(req,res)=>{
  const data = {
    from: 'Excited User <yashi.shukla2010@gmail.com>',
    to: 'yashi.shukla2019@vitstudent.ac.in',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomeness!'
  };
  
  mailgun.messages().send(data, (error, body) => {
    if(!error) res.status(200).send("Email sent successfully");
    else res.status(500).send("Internal server error");
  });
})

module.exports=app;
