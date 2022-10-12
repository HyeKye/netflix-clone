import React from "react";
import { auth } from "../firebase";
import "./SignUpScreen.css";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'



function SignUpScreen() {
  const emailRef = txtEmail.value;
  const passwordRef = txtPassword.value;

  const register = async () => {

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      emailRef,
      passwordRef
      )
      console.log(userCredential.user)
  };

  const signIn = (e) => {
    e.preventDefault();
  
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input  id="txtEmail" placeholder="Email" type="email" />
        <input  id="txtPassword" placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signupScreen_gray">New to Netflix? </span>
          <span className="signupScreen_link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;