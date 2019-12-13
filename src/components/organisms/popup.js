import React from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import Logo from "../atoms/icon/logo";
import Text from "../atoms/text";

export default () => (
  <Popup
    modal={true}
    lockScroll={true}
    defaultOpen={true}
    closeOnDocumentClick={false}
    position="right center"
    contentStyle={contentStyle}
  >
    {close => (
      <Wrapper>
        <Logo
          style={{
            width: "14.5rem",
            height: "2.85rem",
            margin: "2.76rem 0 1.2rem 0"
          }}
        ></Logo>
        <Text
          level={4}
          color="#3446d4"
          spacing="-0.048rem"
          align="center"
          width="22rem"
        >
          Service for foreigners residing in Korea who are in need of medicinal
          information.
        </Text>
        <InfoWrapper>
          <Text
            level={4}
            weight="bold"
            spacing="-0.048rem"
            color="#333"
            align="left"
            width="28rem"
          >
            For Your Information:
          </Text>
          <br />
          <Text width="28rem" level={3.5} spacing="-0.044rem" align="left">
            1. Every information provided by this service can be used for
            informational reference purposes only – for exact identification of
            symptoms, visit a doctor or pharmacist.
          </Text>
          <br />
          <Text width="28rem" level={3.5} spacing="-0.044rem" align="left">
            2. Every information provided by this service is not a
            representation of a medical opinion; persons and entrepreneurs who
            provided the search results are not obligated to legal
            responsibilities.{" "}
          </Text>
          <br />
          <Text width="28rem" level={3.5} spacing="-0.044rem" align="left">
            3. Every information provided by this service can potentially carry
            errors due to different medical opinions, mistyped text, and
            translation process; it does not encompass every medical opinion
            that may vary by different medical personnel.
          </Text>
          <br />
          <Text width="28rem" level={3.5} spacing="-0.044rem" align="left">
            4. Personnel associated with this service do not have obligations to
            compensate for any damages the user may have experienced due to
            change in content of this service that does not come at purpose or
            by negligence of the personnel.
          </Text>
        </InfoWrapper>
        <CloseBtn
          onClick={() => {
            close();
          }}
        >
          <Text
            width="4.3rem"
            level={5}
            weight="bold"
            spacing="-0.056rem"
            align="left"
            color="#3446d4"
          >
            I agree
          </Text>
        </CloseBtn>
      </Wrapper>
    )}
  </Popup>
);

const contentStyle = {
  overflowY: "scroll",
  width: "31.2rem",
  height: "45rem",
  border: "none",
  borderRadius: "0.8rem",
  boxShadow: "0 0.4rem 0.8rem 0 #e0dfe7",
  backgroundColor: "#fff"
};

const Wrapper = styled.div`
  width: 31.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const InfoWrapper = styled.div`
  width: 31.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3.2rem;
`;

const CloseBtn = styled.button`
  background-color: #fff;
  border: none;
  margin: 2.4rem;
`;
