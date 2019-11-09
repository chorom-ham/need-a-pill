import React from "react";
import Link from "next/link";
import Up from "../../../atoms/Button/icon/chevron/up";
import Down from "../../../atoms/Button/icon/chevron/down";
import MoreButton from "../../../atoms/Button/moreButton";
import Text from "../../../atoms/text";
import styled from "styled-components";

function ReadMore() {
  return (
    <>
      <MoreButton align="center" topRadius="0.8rem">
        <Text
          level="5"
          weight="bold"
          spacing="-0.056rem"
          color="white"
          align="left"
        >
          Effects and Dosages
        </Text>
        <Up
          style={{
            width: "0.5rem",
            height: "0.85rem",
            padding: "0 0.5rem"
          }}
          fill="white"
        ></Up>
      </MoreButton>
    </>
  );
}

export default ReadMore;
