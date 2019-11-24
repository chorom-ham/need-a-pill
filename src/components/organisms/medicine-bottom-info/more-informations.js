import React, { useState } from "react";
import styled from "styled-components";
import ReadMoreButton from "../../molecules/Button/more-button/show-more";
import InfoUnit from "../../molecules/info-unit/info-unit";

export default function MoreInformations(props) {
  const [closed, setClosed] = useState(false);

  return (
    <Wrapper>
      <CardWrapper>
        {closed && (
          <ReadMoreButton
            onClick={() => setClosed(false)}
            isClosed={closed}
            title="More Informations"
          ></ReadMoreButton>
        )}
        {closed || (
          <>
            <ReadMoreButton
              onClick={() => setClosed(true)}
              isClosed={closed}
              title="More Informations"
            ></ReadMoreButton>
            <InfoUnit
              color="#b9b9ba"
              title="Description"
              content={props.description}
            />
            <InfoUnit
              color="#b9b9ba"
              title="Substance (by mg)"
              content={props.substances}
            />
            <InfoUnit
              color="#b9b9ba"
              title="Preservation"
              content={props.preservation}
            />
            <InfoUnit
              color="#b9b9ba"
              title="Packaging"
              content={props.packaging}
            />
            <InfoUnit
              color="#b9b9ba"
              title="Last Date of Usage Manual Modification"
              content={props.lastDate}
            />
            <InfoUnit
              color="#b9b9ba"
              title="ATC Code"
              content={props.ATCCode}
            />
            <InfoUnit
              color="#b9b9ba"
              title="Link to health.kr"
              content={props.link}
            />
          </>
        )}
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
