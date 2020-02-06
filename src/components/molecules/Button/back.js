import React from "react";
import BackIcon from "../../atoms/Button/icon/back";
import Router from "next/router";

function backButton() {
  return (
    <a onClick={() => Router.back()}>
      <BackIcon
        style={{ width: "1.8rem", height: "1.4rem" }}
        fill="#3446d4"
      ></BackIcon>
    </a>
  );
}

export default backButton;
