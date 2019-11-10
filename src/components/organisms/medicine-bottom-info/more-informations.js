import React from "react";
import styled from "styled-components";
import ReadMoreButton from "../../molecules/Button/more-button/more-informations";
import InfoUnit from "../../molecules/info-unit/info-unit";

export default function MoreInformations() {
  return (
    <Wrapper>
      <CardWrapper>
        <ReadMoreButton></ReadMoreButton>
        <InfoUnit color="#b9b9ba" title="Description" content="약 외형" />
        <InfoUnit color="#b9b9ba" title="Substance (by mg)" content="약 성분" />
        <InfoUnit color="#b9b9ba" title="Precautions" content="주의사항" />
        <InfoUnit color="#b9b9ba" title="Preservation" content="보관 방법" />
        <InfoUnit color="#b9b9ba" title="Packaging" content="패키징" />
        <InfoUnit
          color="#b9b9ba"
          title="Last Date of Usage Manual Modification"
          content="최근 수정일자"
        />
        <InfoUnit color="#b9b9ba" title="ATC Code" content="ATC 코드" />
        <InfoUnit
          color="#b9b9ba"
          title="Link to health.kr"
          content="health.kr로 연결링크"
        />
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
