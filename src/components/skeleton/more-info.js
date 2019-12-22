import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

export default function MoreInfo() {
  return (
    <Wrapper>
      <Small></Small>
      <Large></Large>
      <Large></Large>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fff;
  width: 31.2rem;
  height: 25.2rem;
  border-radius: 0.8rem;
  box-shadow: 0 0.4rem 0.8rem 0 #e0dfe7;
  padding: 1.6rem;
  margin-bottom: 1.6rem;
  box-sizing: border-box;
`;

const Small = styled.div`
  width: 4.1rem;
  height: 0.8rem;
  background-color: #ececf0;
  margin-bottom: 1.2rem;
`;

const Middle = styled.div`
  width: 16.9rem;
  height: 0.8rem;
  background-color: #ececf0;
  margin-bottom: 1.3rem;
`;

const Large = styled.div`
  width: 28rem;
  height: 0.8rem;
  background-color: #ececf0;
  margin-bottom: 1.2rem;
`;
