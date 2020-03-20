import React from "react";
import BackIcon from "../../atoms/Button/icon/back";
import Link from "next/link";

function backButton() {
  return (
    <Link href="index">
      <a>
        <BackIcon
          style={{ width: "1.8rem", height: "1.4rem" }}
          fill="#3446d4"
        ></BackIcon>
      </a>
    </Link>
  );
}

export default backButton;
