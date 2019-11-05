import React from "react";
import styled from "styled-components";
import ReadMoreButton from "../molecules/Button/read-more";
import MainInfo from "../molecules/info-unit/main";

function MedicineCard() {
  return (
    <Wrapper>
      <CardWrapper>
        <MainInfo></MainInfo>
        <ReadMoreButton></ReadMoreButton>
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
`;

export default MedicineCard;
