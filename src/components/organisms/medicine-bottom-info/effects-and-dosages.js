import React from "react";
import styled from "styled-components";
import ReadMoreButton from "../../molecules/Button/more-button/effects-and-dosages";
import MainInfo from "../../molecules/info-unit/main";
import Effects from "../../molecules/info-unit/blue/effects";
import Dosages from "../../molecules/info-unit/blue/dosages";

export default function EffectsAndDosages() {
  return (
    <Wrapper>
      <CardWrapper>
        <ReadMoreButton></ReadMoreButton>
        <Effects></Effects>
        <Dosages></Dosages>
      </CardWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const CardWrapper = styled.div`
  width: 31.2rem
  background-color: white;
  box-shadow: 0 0.4rem 0.8rem 0 #e0dfe7;
  box-sizing: border-box;
  border-radius: 0.8rem;
`;
