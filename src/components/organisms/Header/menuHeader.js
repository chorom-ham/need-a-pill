import React from "react";
import styled from "styled-components";
import Text from "../../atoms/text";
import BackButton from "../../molecules/Button/back";

function mainHeader(props) {
  return (
    <MainHeaderWrapper>
      <BackButtonWrapper>
        <BackButton></BackButton>
      </BackButtonWrapper>
      <Text level={6} weight="bold" spacing="-0.064rem" color="#3446d4">
        {props.headerText}
      </Text>
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
  margin: 5.6rem 0 2.91rem 0;
`;

const BackButtonWrapper = styled.div`
  position: absolute;
  left: 2.4rem;
`;

const LogoButtonWrapper = styled.div`
  position: absolute;
  left: 12.6rem;
  width: "10.31rem";
  height: "2.03rem";
`;

export default mainHeader;
