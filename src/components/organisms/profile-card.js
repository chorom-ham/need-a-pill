import React from "react";
import { useSelector } from "react-redux";
import Popup from "reactjs-popup";
import styled from "styled-components";
import Text from "../atoms/text";
import Logout from "../molecules/log-in/google-logout";

export default function ProfileCard() {
  const _state = useSelector(state => state.login);

  return (
    <Popup
      modal={true}
      lockScroll={true}
      defaultOpen={false}
      closeOnDocumentClick={true}
      position="right center"
      contentStyle={contentStyle}
      trigger={
        <Btn>
          <Img src={_state.profile_pic}></Img>
        </Btn>
      }
    >
      <Wrapper>
        <Row>
          <Col>
            <ProfileWrapper>
              <Img src={_state.profile_pic}></Img>
            </ProfileWrapper>
          </Col>
          <Col>
            <Text level={6} weight={500} spacing="-0.048rem">
              {_state.name}
            </Text>
            <Edit href="https://myaccount.google.com/intro/personal-info">
              <Text level={4} color="#999" spacing="-0.036rem">
                Edit on Google
              </Text>
            </Edit>
          </Col>
        </Row>
        <Logout onClick={() => close()}></Logout>
        <A>Contact Us</A>
        <A>Privacy Statement</A>
      </Wrapper>
    </Popup>
  );
}

const contentStyle = {
  display: "flex",
  width: "31.2rem",
  height: "17.8rem",
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
  justify-content: space-between;
  box-sizing: border-box;
  padding: 2rem;
`;

const ProfileWrapper = styled.div`
  width: 5.2rem;
  height: 5.2rem;
  border-radius: 2.6rem;
  background-color: #999;
  overflow: hidden;
  margin-right: 1.2rem;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Btn = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 1.2rem;
  background-color: #999;
  border: none;
  overflow: hidden;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 5.2rem;
  align-items: left;
  margin-bottom: 2rem;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const A = styled.a`
  font-size: 1rem;
  color: #999;
  letter-spacing: -0.03rem;
`;

const Edit = styled.a`
  text-decoration: none;
`;
