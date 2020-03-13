import React from "react";
import styled from "styled-components";
import Router from "next/router";

export default function doneButton() {
  return (
    <a onClick={() => Router.back()}>
      <Wrapper type="submit" value="Done"></Wrapper>
    </a>
  );
}

const Wrapper = styled.input`
  width: 5.9rem;
  height: 2.4rem;
  border-radius: 1.2rem;
  border: none;
  background-color: #3446d4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: bold;
  color: #fff;
`;
