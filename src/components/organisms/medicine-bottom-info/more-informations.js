import React from "react";
import styled from "styled-components";
import ReadMoreButton from "../../molecules/Button/more-button/more-informations";

import Description from "../../molecules/info-unit/light-grey/description";
import Substance from "../../molecules/info-unit/light-grey/substance";
import Precautions from "../../molecules/info-unit/light-grey/precautions";
import Preservatons from "../../molecules/info-unit/light-grey/preservation";
import Packaging from "../../molecules/info-unit/light-grey/packaging";
import LastModification from "../../molecules/info-unit/light-grey/lastModification";
import ATCcode from "../../molecules/info-unit/light-grey/ATCCode";
import LinkTo from "../../molecules/info-unit/light-grey/linkTo";

export default function MoreInformations() {
  return (
    <Wrapper>
      <CardWrapper>
        <ReadMoreButton></ReadMoreButton>
        <Description></Description> <Substance></Substance>
        <Precautions></Precautions> <Preservatons></Preservatons>
        <Packaging></Packaging>
        <LastModification></LastModification> <ATCcode></ATCcode>
        <LinkTo></LinkTo>
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
