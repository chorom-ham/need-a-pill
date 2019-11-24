import React from "react";
import BackIcon from "../../atoms/Button/icon/back";
import Router from "next/router";

function backButton() {
  return (
    <a onClick={() => Router.back()}>
      <BackIcon
        style={{ width: "1.26rem", height: "1.24rem" }}
        fill="#3446d4"
      ></BackIcon>
    </a>
  );
}

export default backButton;
