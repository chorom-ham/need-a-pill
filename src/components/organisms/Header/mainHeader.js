import React from "react";
import styled from "styled-components";
import LogoButton from "../../molecules/Button/logo";
import BackButton from "../../molecules/Button/back";

function mainHeader() {
  return (
    <MainHeaderWrapper>
      <BackButtonWrapper>
        <BackButton></BackButton>
      </BackButtonWrapper>
      <LogoButtonWrapper>
        <LogoButton></LogoButton>
      </LogoButtonWrapper>
    </MainHeaderWrapper>
  );
}

const MainHeaderWrapper = styled.header`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 2.5rem 0;
`;

const BackButtonWrapper = styled.div`
  position: absolute;
  left: 2.4rem;
`;

const LogoButtonWrapper = styled.div`
  position: relavive;
  left: 40%;
`;

export default mainHeader;
