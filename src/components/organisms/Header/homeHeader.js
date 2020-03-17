import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Button from "../../molecules/Button/menu";
import LogIn from "../../molecules/log-in/google";
import Profile from "../../organisms/profile-card";

function homeHeader(props) {
  const _state = useSelector(state => state.login);

  return (
    <HomeHeaderWrapper>
      <Button onClick={props.buttonClick}></Button>
      {_state.isSignedIn ? <Profile></Profile> : <LogIn></LogIn>}
    </HomeHeaderWrapper>
  );
}

const HomeHeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 4.8rem 2.4rem 0 2.4rem;
`;

export default homeHeader;
