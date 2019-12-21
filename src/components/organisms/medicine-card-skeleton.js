import React from "react";
import styled from "styled-components";
import ImageHolder from "../atoms/image-holder/small";

function MedicineCard() {
  return (
    <Wrapper>
      <CardWrapper>
        <MainInfoWrapper>
          <ImageHolder></ImageHolder>
          <NameWrapper>
            <Middle></Middle>
            <Middle></Middle>
          </NameWrapper>
        </MainInfoWrapper>
        <BottomWrapper>
          <Small></Small>
          <Large></Large>
          <Small></Small>
          <Large></Large>
        </BottomWrapper>
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
  height: 28rem;
`;

const MainInfoWrapper = styled.div`
  width: 100%;
  height: 10.5rem;
  display: flex;
  border-bottom: 0.2rem solid #ececf0;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`;

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1.6rem 0.8rem 1.6rem;
  box-sizing: border-box;
`;

const Small = styled.div`
  width: 4.1rem;
  height: 0.8rem;
  background-color: #ececf0;
  margin-bottom: 1.2rem;
`;

const Middle = styled.div`
  width: 16.9rem;
  height: 0.8rem;
  background-color: #ececf0;
  margin-bottom: 1.3rem;
`;

const Large = styled.div`
  width: 28rem;
  height: 0.8rem;
  background-color: #ececf0;
  margin-bottom: 1.2rem;
`;

export default MedicineCard;
