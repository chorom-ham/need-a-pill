import React from "react";
import Link from "next/link";
import Up from "../../../atoms/Button/icon/chevron/up";
import Down from "../../../atoms/Button/icon/chevron/down";
import MoreButton from "../../../atoms/Button/moreButton";
import Text from "../../../atoms/text";
import styled from "styled-components";

function ShowMore(props) {
  const { isSelected, onClick } = props;
  return (
    <>
      <MoreButton
        onClick={onClick}
        align="center"
        topRadius="0.8rem"
        bottomRadius={isSelected ? "0.8rem" : "0"}
        justify="space-between"
      >
        <Text
          level="5"
          weight="bold"
          spacing="-0.056rem"
          color="white"
          align="left"
        >
          {props.title}
        </Text>
        {isSelected && (
          <Down
            style={{
              width: "2.4rem",
              height: "2.4rem"
            }}
            fill="white"
          ></Down>
        )}
        {isSelected || (
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
