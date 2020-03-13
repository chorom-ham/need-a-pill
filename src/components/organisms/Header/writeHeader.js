import React from "react";
import styled from "styled-components";
import Text from "../../atoms/text";
import BackButton from "../../molecules/Button/x";

function writeHeader() {
  return (
    <MenuHeaderWrapper>
      <BackButtonWrapper>
        <BackButton></BackButton>
      </BackButtonWrapper>
      <Text level={6} weight="bold" spacing="-0.064rem" color="#3446d4">
        Write
      </Text>
    </MenuHeaderWrapper>
  );
}

const MenuHeaderWrapper = styled.header`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4.6rem 0 1.6rem 0;
  border-bottom: 0.4rem solid #ececf0;
`;

const BackButtonWrapper = styled.div`
  position: absolute;
  left: 2rem;
`;

export default writeHeader;
