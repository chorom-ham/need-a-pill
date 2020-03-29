import React, { useCallback } from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export default function Google() {
  const dispatch = useDispatch();

  const login = useCallback(response => {
    const _name = response.profileObj.name;
    const _email = response.profileObj.email;
    const _image = response.profileObj.imageUrl;

    axios
      .post(`${process.env.API_HOST}/user`, {
        name: _name,
        email: _email,
        image: _image
      })
      .catch(function(error) {
        console.log(error);
      });

    dispatch({
      type: "IN",
      isSignedIn: true,
      name: _name,
      email: _email,
      profile_pic: _image
    });
  }, []);

  return (
    <GoogleLogin
      clientId={process.env.GOOGLE_CLIENT_ID}
      buttonText="Sign in"
      onSuccess={login}
      onFailure={response => console.log(response)}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
}
