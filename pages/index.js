import React from "react";
import Head from "next/head";
import Link from "next/link";
import HomeHeader from "../src/components/organisms/Header/homeHeader";
import HomeMain from "../src/components/organisms/home-main";
import Footer from "../src/components/organisms/footer";
import styled, { css } from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Need a Pill</title>
      </Head>
      <HomeHeader></HomeHeader>
      <Wrapper>
        <HomeMain></HomeMain>
      </Wrapper>
      <Footer></Footer>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  height:80%
  flex-direction: column;
  justify-content: center;
`;
