import React from "react";
import Link from "next/link";
import LogoIcon from "../../atoms/icon/logo";

function logoButton() {
  return (
    <>
      <Link href="index">
        <a>
          <LogoIcon style={{ width: "10.31rem", height: "2.03rem" }}></LogoIcon>
        </a>
      </Link>
    </>
  );
}

export default logoButton;
