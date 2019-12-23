import React from "react";
import styled from "styled-components";
import ReadMoreButton from "../molecules/Button/more-button/read-more";
import MainInfo from "../molecules/info-unit/main";
import InfoUnit from "../molecules/info-unit/info-unit";

function MedicineCard(props) {
  const { engName, krName, effects, dosages, img } = props;
  return (
    <Wrapper>
      <CardWrapper>
        <MainInfo img={img} engName={engName} krName={krName}></MainInfo>
        <InfoUnit color="#3446d4" title="Effects" content={effects} />
        <InfoUnit color="#3446d4" title="Dosages" content={dosages} />
        <ReadMoreButton engName={engName}></ReadMoreButton>
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

export default MedicineCard;
