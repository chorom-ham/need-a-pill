import React from "react";
import styled from "styled-components";
import Button from "../../molecules/Button/menu";
import LogIn from "../../molecules/log-in/google";

function homeHeader(props) {
  return (
    <HomeHeaderWrapper>
      <Button onClick={props.buttonClick}></Button>
      <LogIn></LogIn>
    </HomeHeaderWrapper>
  );
}

const HomeHeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 4.8rem 2.4rem 0 2.4rem;
`;

export default homeHeader;
