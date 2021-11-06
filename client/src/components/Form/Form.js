import { auth } from "../Login/setupFirebase"
import swal from 'sweetalert';
import { useState } from "react";
import "./Form.css"
import * as XLSX from 'xlsx';
export const Form=(props)=>{
    const axios=require('axios');
    const user=auth.currentUser;
    const email=user.email;
    const name=user.displayName;
    const [subject,setSubject]=useState('');
    const [rec,setRec]=useState([]);
    const[content,setContent]=useState('');

    const readExcel=(file)=>{
        const promise=new Promise((resolve,reject)=>{
            const fileReader=new FileReader();
            fileReader.readAsArrayBuffer(file);

            fileReader.onload=(e)=>{
                const bufferArray=e.target.result;
                const wb=XLSX.read(bufferArray,{type:"buffer"});

                const wsname=wb.SheetNames[0];

                const ws=wb.Sheets[wsname];

                const data=XLSX.utils.sheet_to_json(ws);

                resolve(data);
            }
        })

        promise.then(d=>{
            const emails=[]
            d.map(cell=>{
                emails.push(cell.Email);
            })
            setRec([...emails,...rec]);
        })
    }

    const sendMail=async()=>{
        const checkMail=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!subject || !rec || !content || !email)
        swal("Error!","Please fill in all the fields","error");
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
            <input type="text" placeholder="Subject" onChange={(event)=>{setSubject(event.target.value);props.passData({name,email,subject,rec,content})}}></input>
            <br />
            <input type="text" placeholder="Receipient" onChange={(event)=>{setRec(event.target.value);props.passData({name,email,subject,rec,content})}}></input>
            <br />
            <input type="text" placeholder={user.email}></input>
            <br />
            <input type="file" id="recFile" onChange={(event)=>{
                const file=event.target.files[0];
                readExcel(file);
            }}></input>
            <br />
            <textarea placeholder="Email content" cols="60" rows="10" onChange={(event)=>{setContent(event.target.value);props.passData({name,email,subject,rec,content})}}></textarea>
            <br />
            <button className="butt" onClick={sendMail}>Send</button>
        </div>
    )
}