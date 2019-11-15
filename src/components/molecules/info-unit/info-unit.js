import React from "react";
import styled from "styled-components";
import Text from "../../atoms/text";

export default function infoUnit(props) {
  return (
    <Wrapper>
      <Text
        level={3}
        weight="bold"
        align="left"
        color={props.color}
        spacing="-0.04rem"
      >
        {props.title}
      </Text>
      <Text
        level={3}
        weight="normal"
        align="left"
        color="#333"
        spacing="-0.04rem"
        width="27.8rem"
      >
        {props.content}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0.8rem 1.6rem 0.8rem 1.6rem;
  box-sizing: border-box;
`;
