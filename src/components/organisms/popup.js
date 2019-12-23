import React from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import Logo from "../atoms/icon/logo";
import Ministry from "../atoms/icon/ministry";
import Text from "../atoms/text";
import CloseBtn from "../atoms/Button/popup";

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
        <Line></Line>
        <Ministry
          style={{ width: "3.6rem", height: "3.4rem", marginBottom: "0.8rem" }}
        ></Ministry>
        <Text
          level={2}
          spacing="-0.032rem"
          color="#b9b9ba"
          align="center"
          width="22rem"
        >
          Needapill makes it a high-priority principle to provide only
          information approved by Ministry of Health & Welfare of Korea.
        </Text>
        <Line></Line>
        <InfoWrapper>
          <Text
            level={4}
            weight="bold"
            spacing="-0.048rem"
            color="#b9b9ba"
            align="left"
            width="28rem"
          >
            For Your Information:
          </Text>
          <br />
          <Text
            width="28rem"
            level={3.5}
            spacing="-0.044rem"
            align="left"
            color="#b9b9ba"
          >
            1. Every information provided by this service can be used for
            informational reference purposes only – for exact identification of
            symptoms, visit a doctor or pharmacist.
          </Text>
          <br />
          <Text
            width="28rem"
            level={3.5}
            spacing="-0.044rem"
            align="left"
            color="#b9b9ba"
          >
            2. Every information provided by this service is not a
            representation of a medical opinion; persons and entrepreneurs who
            provided the search results are not obligated to legal
            responsibilities.
          </Text>
          <br />
          <Text
            width="28rem"
            level={3.5}
            spacing="-0.044rem"
            align="left"
            color="#b9b9ba"
          >
            3. Every information provided by this service can potentially carry
            errors due to different medical opinions, mistyped text, and
            translation process; it does not encompass every medical opinion
            that may vary by different medical personnel.
          </Text>
          <br />
          <Text
            width="28rem"
            level={3.5}
            spacing="-0.044rem"
            align="left"
            color="#b9b9ba"
          >
            4. Personnel associated with this service do not have obligations to
            compensate for any damages the user may have experienced due to
            change in content of this service that does not come at purpose or
            by negligence of the personnel.
          </Text>
        </InfoWrapper>
        <CloseBtn
          color="#3446d4"
          onClick={() => {
            close();
          }}
        >
          <Text
            level={5}
            weight="bold"
            spacing="-0.056rem"
            align="center"
            color="#fff"
            deco="underline"
          >
            Okay. I agree
          </Text>
        </CloseBtn>
        <CloseBtn
          color="#ececf0"
          onClick={() => {
            close();
          }}
        >
          <Text
            level={5}
            weight="bold"
            spacing="-0.056rem"
            align="center"
            color="#333"
          >
            Remind me later
          </Text>
        </CloseBtn>
      </Wrapper>
    )}
  </Popup>
);

const contentStyle = {
  overflowY: "scroll",
  width: "31.2rem",
  height: "43rem",
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
  padding-bottom: 2rem;
`;

const Line = styled.div`
  background-color: #e0dfe7;
  width: 29rem;
  height: 0.1rem;
  margin: 0.8rem 0;
`;

const InfoWrapper = styled.div`
  width: 31.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0.4rem;
  margin-bottom: 2rem;
`;
