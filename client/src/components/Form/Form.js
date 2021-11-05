import { auth } from "../Login/setupFirebase"
import swal from 'sweetalert';
import { useState } from "react";
import "./Form.css"
export const Form=()=>{
    const axios=require('axios');
    const user=auth.currentUser;
    const email=user.email;
    const name=user.displayName;
    const [subject,setSubject]=useState('');
    const [rec,setRec]=useState('');
    const[content,setContent]=useState('');
    const sendMail=async()=>{
        const checkMail=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!subject || !rec || !content || !email)
        swal("Error!","Please fill in all the fields","error");
        else if (!checkMail.test(rec)) swal("Error!","Fill correct email ID","error");
        else{
            const data={
                name,email,subject,rec,content
            };
            const result=await axios.post("http://localhost:5000/mailgun/send",data);
            if(result.status===200)
            swal("Email sent!", "Your email has been delivered!", "success");
            else swal("Error!", "Internal server error!", "error");
        }
    }
    return(
        <div>
            <input type="text" placeholder="Subject" onChange={(event)=>{setSubject(event.target.value)}}></input>
            <br />
            <input type="text" placeholder="Receipient" onChange={(event)=>{setRec(event.target.value)}}></input>
            <br />
            <input type="text" placeholder={user.email}></input>
            <br />
            <textarea placeholder="Email content" cols="60" rows="10" onChange={(event)=>{setContent(event.target.value)}}></textarea>
            <br />
            <button className="email" onClick={sendMail}>Send</button>
        </div>
    )
}