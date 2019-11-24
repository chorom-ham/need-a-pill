import React, { useState } from "react";
import styled from "styled-components";
import ReadMoreButton from "../molecules/Button/more-button/show-more";
import Text from "../atoms/text";
import ButtonContainer from "./alphabetical/alphabet-button-container";
import ResultContainer from "./alphabetical/alphabet-result-container";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

export default function alphabetical() {
  const [closed, setClosed] = useState(false);
  const [alphabet, setAlphabet] = useState("A");

  return (
    <Wrapper>
      {closed && (
        <ReadMoreButton
          onClick={() => setClosed(false)}
          isClosed={closed}
          title="Alphabetical"
        ></ReadMoreButton>
      )}
      {closed || (
        <>
          <ReadMoreButton
            onClick={() => setClosed(true)}
            isClosed={closed}
            title="Alphabetical"
          ></ReadMoreButton>
          <ButtonContainer></ButtonContainer>
          <ResultContainer alphabet={alphabet}></ResultContainer>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 31.2rem;
  margin: 1.2rem auto;
  border-radius: 0.8rem;
  box-shadow: 0 0.4rem 0.8rem 0 #e0dfe7;
  background-color: #fff;
`;
