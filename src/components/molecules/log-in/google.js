import React, { useCallback } from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import axios from "axios";

export default function Google() {
  const dispatch = useDispatch();

  const login = useCallback(response => {
    const _name = response.profileObj.name;
    const _email = response.profileObj.email;
    const _image = response.profileObj.imageUrl;

    axios
      .post("https://needapill-server.herokuapp.com/user", {
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
      clientId="237635840259-cktqanlh26ui8je9bc1i22s8njtunuba.apps.googleusercontent.com"
      buttonText="Sign in"
      onSuccess={login}
      onFailure={() => alert("Error! Try it again!")}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
}
