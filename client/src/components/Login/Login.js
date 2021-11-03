import firebase from "firebase"
import { StyledFirebaseAuth } from 'react-firebaseui'
import {useEffect} from 'react'
import { useHistory } from "react-router"
import "./Login.css"


var configUI={
    signInFlow:"popup",
    signInOptions:[
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks:{
      signInSuccessWithAuthResult:()=>{
        return false;
      }
    }
  }


 function Login(){
   const history=useHistory();
    useEffect(()=>{
        firebase.auth().onAuthStateChanged(async (user)=>{
            if(user){
                history.push("/dashboard")
            }
        });
      })    
    return(
        <div className="login">
            <h1 className="loginHead"><span>Log</span>in</h1>
            <StyledFirebaseAuth style={{marginBottom:0,marginTop:0}} uiConfig={configUI} firebaseAuth={firebase.auth()} />
        </div>
    )
}

export default Login;