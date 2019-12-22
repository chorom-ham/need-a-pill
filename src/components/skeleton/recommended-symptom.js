import React from "react";
import styled from "styled-components";

export default function skeleton() {
  return (
    <Wrapper>
      <Large></Large>
      <Large></Large>
      <Large></Large>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 31.2rem;
  height: 21.8rem;
  box-shadow: 0 0.4rem 0.8rem 0 #e0dfe7;
  background-color: #fff;
  border-bottom-right-radius: 0.8rem;
  border-bottom-left-radius: 0.8rem;
  padding: 1.6rem;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Large = styled.div`
  width: 28rem;
  height: 0.8rem;
  background-color: #ececf0;
  margin-bottom: 1.6rem;
`;
