import firebase from "firebase"
import { StyledFirebaseAuth } from 'react-firebaseui'
import {useEffect} from 'react'


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
    useEffect(()=>{
        firebase.auth().onAuthStateChanged(async (user)=>{
            if(user){
                console.log(user)
            }
        });
      })    
    return(
        <div>
            <StyledFirebaseAuth uiConfig={configUI} firebaseAuth={firebase.auth()} />
        </div>
    )
}

export default Login;