import "./Dashboard.css"
import { auth } from "../Login/setupFirebase"
import { useHistory } from "react-router"
import { Form } from "../Form/Form"
import { Preview } from "../Preview/Preview"
import { useState } from "react"
export const Dashboard=()=>{
    const user=auth.currentUser;
    const history=useHistory();
    const [data,setData]=useState({name:user.displayName,email:user.email,subject:'<Email subject>',content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'});
    const formData=(data)=>{
        setData(data);
    }
    const logout=()=>{
        auth.signOut()
        .then(()=>{
            history.push("/");
        })
    }
    return (
        <div className="dashboard">
            <div className="header">
                <h1 className="dashHead">Hello <span>{user.displayName}</span></h1>
                <button className="logout" onClick={logout}>Logout</button>
            </div>
            <div class="content">
                <Form passData={formData} />
                <Preview data={data}/>
            </div>
        </div>
    )
}