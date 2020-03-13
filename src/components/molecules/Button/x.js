import React from "react";
import XIcon from "../../atoms/Button/icon/x";
import Router from "next/router";

function backButton() {
  return (
    <a onClick={() => Router.back()}>
      <XIcon
        style={{ width: "2.4rem", height: "2.4rem" }}
        fill="#3446d4"
      ></XIcon>
    </a>
  );
}

export default backButton;
