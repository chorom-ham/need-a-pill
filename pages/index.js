import React, { useState } from "react";
import Head from "next/head";
import Header from "../src/components/organisms/Header/homeHeader";
import HomeComponents from "../src/components/templates/home";
import Footer from "../src/components/organisms/footer";
import styled, { css } from "styled-components";
import Popup from "../src/components/organisms/popup";

export default function Home() {
  return (
    <Wrapper>
      <div>
        <Popup />
      </div>
      <Header></Header>
      <HomeComponents></HomeComponents>
      <Footer></Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  min-height: 100%;
  margin-top: 0;
`;
