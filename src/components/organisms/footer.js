import React from "react";
import styled from "styled-components";
import Text from "../atoms/text";

function homeFooter() {
  return (
    <HomeFooterWrapper>
      <TextWrapper>
        <Text
          level={2}
          color="#b9b9ba"
          fstyle="normal"
          weight={500}
          spacing="-0.032rem"
        >
          Information provided on this site may differ from its intended
          purpose. Check with your doctor or pharmacist first. This material is
          provided for educational purposes only and is not intended for medical
          advice, diagnosis or treatment.
        </Text>
      </TextWrapper>
      <TextWrapper>
        <Text
          level={1}
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
`;

const TextWrapper = styled.div`
  padding: 0 2.5rem;
`;
export default homeFooter;
