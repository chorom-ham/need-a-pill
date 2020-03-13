import React from "react";
import styled from "styled-components";

export default function writeButton() {
  return (
    <Wrapper>
      <img src="icon/write.svg" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 6.2rem;
  height: 6.2rem;
  border-radius: 3.1rem;
  box-shadow: 0 0.4rem 0.8rem 0 #e0dfe7;
  background-color: #3446d4;
  position: absolute;
  right: 2.4rem;
  bottom: 3.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
