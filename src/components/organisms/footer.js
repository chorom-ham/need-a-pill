import React from "react";
import styled from "styled-components";
import Text from "../atoms/text";

function homeFooter() {
  return (
    <HomeFooterWrapper>
      <TextWrapper>
        <Text level={2} spacing="-0.032rem" color="#b9b9ba" align="center">
          Information provided on this site may differ from its intended
          purpose.
          <br />
          Check with your doctor or pharmacist first.
          <br />
          This material is provided for educational purposes only and is
          <br />
          not intended for medical advice, diagnosis or treatment.
        </Text>
      </TextWrapper>
      <TextWrapper>
        <Text align="center" level={1} color="#b9b9ba" spacing="-0.024rem">
          Copyright © 2019 Needapillkr.com.
          <br /> All rights reserved.
        </Text>
      </TextWrapper>
    </HomeFooterWrapper>
  );
}

const HomeFooterWrapper = styled.footer`
  width: 100%;
  background-color: #fff;
  position: absolute;
  bottom: 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 1.2rem;
`;

const TextWrapper = styled.div`
  margin-bottom: 0.8rem;
`;
export default homeFooter;
