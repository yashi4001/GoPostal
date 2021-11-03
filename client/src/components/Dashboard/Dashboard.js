import "./Dashboard.css"
import { auth } from "../Login/setupFirebase"
import { useHistory } from "react-router"
import { Form } from "../Form/Form"
import { Preview } from "../Preview/Preview"
export const Dashboard=()=>{
    const user=auth.currentUser;
    const history=useHistory();
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
                <Form />
                <Preview />
            </div>
        </div>
    )
}