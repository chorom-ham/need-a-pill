import React from "react";
import styled from "styled-components";
import Text from "../atoms/text";

function homeFooter() {
  return (
    <HomeFooterWrapper>
      <TextWrapper>
        <Text
          level={1}
          color="#b9b9ba"
          fstyle="normal"
          weight={500}
          spacing="-0.032rem"
          align="center"
        >
          Information provided on this site may differ from its intended
          purpose. Check with your doctor or pharmacist first. This material is
          provided for educational purposes only and is not intended for medical
          advice, diagnosis or treatment.
        </Text>
      </TextWrapper>
      <TextWrapper>
        <Text
          align="center"
          level={0.5}
          color="#b9b9ba"
          fstyle="normal"
          weight={500}
          spacing="-0.024rem"
        >
          Copyright © 2019 Needapillkr.com. All rights reserved.
        </Text>
      </TextWrapper>
    </HomeFooterWrapper>
  );
}

const HomeFooterWrapper = styled.footer`
  display: inline-block;
  padding: 1rem 0;
  background-color: #fff;
`;

const TextWrapper = styled.div`
  padding: 0 2.5rem;
`;
export default homeFooter;
