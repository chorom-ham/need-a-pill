import React, { useCallback } from "react";
import styled from "styled-components";
import { GoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";

export default function Logout(props) {
  const dispatch = useDispatch();

  const logout = useCallback(() => {
    dispatch({
      type: "OUT"
    });
  }, []);

  return (
    <GoogleLogout
      clientId="237635840259-cktqanlh26ui8je9bc1i22s8njtunuba.apps.googleusercontent.com"
      buttonText="Log out"
      onLogoutSuccess={logout}
      onClick={props.onClick()}
    ></GoogleLogout>
  );
}

const Wrapper = styled.button``;
