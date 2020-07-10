import React, { useCallback } from "react";
import styled from "styled-components";
import { GoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import dotenv from "dotenv";

dotenv.config();

export default function Logout(props) {
  const dispatch = useDispatch();

  const logout = useCallback(() => {
    dispatch({
      type: "OUT",
    });
  }, []);

  return (
    <GoogleLogout
      clientId={process.env.GOOGLE_CLIENT_ID}
      buttonText="Log out"
      onLogoutSuccess={logout}
      onClick={props.onClick()}
    ></GoogleLogout>
  );
}

const Wrapper = styled.button``;
