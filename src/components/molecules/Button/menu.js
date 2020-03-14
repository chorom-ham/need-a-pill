import React from "react";
import styled from "styled-components";
import Icon from "../../atoms/Button/icon/hamburger";

export default function menuButton(props) {
  return (
    <Wrapper onClick={props.onClick}>
      <Icon style={{ width: "2.4rem", height: "2.4rem" }} fill="#3446d4"></Icon>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  background-color: transparent;
  border: none;
`;
