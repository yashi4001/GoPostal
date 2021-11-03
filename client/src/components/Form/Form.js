import { auth } from "../Login/setupFirebase"
import swal from 'sweetalert';
import "./Form.css"
export const Form=()=>{
    const user=auth.currentUser;
    const sendMail=()=>{
        swal("Email sent!", "Your email has been delivered!", "success");
    }
    return(
        <div>
            <input type="text" placeholder="Subject" ></input>
            <br />
            <input type="text" placeholder="Receipient"></input>
            <br />
            <input type="text" placeholder={user.email}></input>
            <br />
            <textarea placeholder="Email content" cols="60" rows="10"></textarea>
            <br />
            <button className="email" onClick={sendMail}>Send</button>
        </div>
    )
}