import React from "react";
import styled from "styled-components";
import Router from "next/router";
import Text from "../../atoms/text";

export default function doneButton() {
  return (
    <a onClick={() => Router.back()}>
      <Wrapper>
        <Text
          level={4}
          font-weight="bold"
          letter-spacing="-0.048rem"
          text-align="center"
          color="#fff"
        >
          Done
        </Text>
      </Wrapper>
    </a>
  );
}

const Wrapper = styled.div`
  width: 5.9rem;
  height: 2.4rem;
  border-radius: 1.2rem;
  background-color: #3446d4;
  display: flex;
  align-items: center;
  justify-content: center;
`;
