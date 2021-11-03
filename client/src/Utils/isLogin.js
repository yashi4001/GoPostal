import {auth} from "../components/Login/setupFirebase"

export const isLogin=()=>{
    const user=auth.currentUser;
    if(user) return true;
    else return false;
}