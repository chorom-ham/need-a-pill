import React from "react";
import styled from "styled-components";
import ReadMoreButton from "../../molecules/Button/more-button/effects-and-dosages";
import InfoUnit from "../../molecules/info-unit/info-unit";

export default function EffectsAndDosages() {
  return (
    <Wrapper>
      <CardWrapper>
        <ReadMoreButton></ReadMoreButton>
        <InfoUnit color="#3446d4" title="Effects" content="효능 효과" />
        <InfoUnit color="#3446d4" title="Dosages" content="복용법" />
      </CardWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CardWrapper = styled.div`
  width: 31.2rem
  background-color: white;
  box-shadow: 0 0.4rem 0.8rem 0 #e0dfe7;
  box-sizing: border-box;
  border-radius: 0.8rem;
  margin-bottom: 1.2rem;
`;
