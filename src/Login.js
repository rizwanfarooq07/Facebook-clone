import React from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { auth, provider } from "./dataBase";
import { signInWithPopup } from "firebase/auth";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      });
      console.log(result.user);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://www.teahub.io/photos/full/172-1725552_facebook-logo-png.png"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
