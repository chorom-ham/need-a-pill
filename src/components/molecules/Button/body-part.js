import React from "react";
import styled, { css } from "styled-components";
import Text from "../../atoms/text";

export default function bodyPartButton(props) {
  return (
    <Wrapper href={props.link}>
      <IconWrapper>
        <props.Icon
          style={{
            width: `${props.width}rem`,
            height: `${props.height}rem`
          }}
          fill="#3446d4"
        />
      </IconWrapper>
      <Text
        color="#333"
        level="3"
        spacing="-0.048rem"
        align="center"
        width="5.6rem"
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
`;

const IconWrapper = styled.button`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 0.8rem;
  border: none;
  box-shadow: 0 0.4rem 0.8rem 0 #e0dfe7;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.4rem;
`;
