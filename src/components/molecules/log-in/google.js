import React from "react";
import GoogleLogin from "react-google-login";

export default function Google() {
  const responseGoogle = response => {
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId="237635840259-cktqanlh26ui8je9bc1i22s8njtunuba.apps.googleusercontent.com"
      buttonText="Sign in"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}
