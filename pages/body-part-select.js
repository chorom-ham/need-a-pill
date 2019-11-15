import React from "react";
import Head from "next/head";
import Link from "next/link";
import MainHeader from "../src/components/organisms/Header/mainHeader";
import styled, { css } from "styled-components";
import BodyPartContainer from "../src/components/organisms/body-part-container";

export default function Home() {
  return (
    <div>
      <Wrapper>
        <Head>
          <title>Need a Pill</title>
        </Head>
        <MainHeader></MainHeader>
        <BodyPartContainer></BodyPartContainer>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
`;
