import React from "react";
import Link from "next/link";
import Up from "../../../atoms/Button/icon/chevron/up";
import Down from "../../../atoms/Button/icon/chevron/down";
import MoreButton from "../../../atoms/Button/moreButton";
import Text from "../../../atoms/text";
import styled from "styled-components";

function ShowMore(props) {
  const { isClosed, onClick } = props;
  return (
    <>
      <MoreButton
        onClick={onClick}
        align="center"
        topRadius="0.8rem"
        bottomRadius={isClosed ? "0.8rem" : "0"}
        justify="space-between"
      >
        <Text
          level="4"
          weight="bold"
          spacing="-0.056rem"
          color="white"
          align="left"
        >
          {props.title}
        </Text>
        {isClosed && (
          <Down
            style={{
              width: "2.4rem",
              height: "2.4rem"
            }}
            fill="white"
          ></Down>
        )}
        {isClosed || (
          <Up
            style={{
              width: "2.4rem",
              height: "2.4rem"
            }}
            fill="white"
          ></Up>
        )}
      </MoreButton>
    </>
  );
}

export default ShowMore;
