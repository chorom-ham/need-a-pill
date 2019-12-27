import React, { useState } from "react";
import styled, { css } from "styled-components";
import Text from "../../../atoms/text";

export default function bodyPartButton(props) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Wrapper href={props.link} onClick={props.onClick}>
      <IconWrapper isClicked={props.selected === props.name}>
        <props.Icon
          style={{
            width: `${props.width}rem`,
            height: `${props.height}rem`
          }}
          fill={props.selected === props.name ? "#fff" : "#3446d4"}
        />
      </IconWrapper>
      <Text
        width="5.7rem"
        color="#333"
        level="4"
        spacing="-0.048rem"
        align="center"
      >
        {props.name}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  box-sizing: border-box;
`;

const IconWrapper = styled.button`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 0.8rem;
  border: none;
  box-shadow: 0 0.4rem 0.8rem 0 #e0dfe7;
  ${props => css`
    ${props.isClicked
      ? "background-color: #3446d4;"
      : "background-color: #fff;"}
  `}

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.4rem;
`;
