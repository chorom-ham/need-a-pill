import React, { useState } from "react";
import Head from "next/head";
import HomeComponents from "../src/components/templates/home";
import Footer from "../src/components/organisms/footer";
import styled, { css } from "styled-components";
import Popup from "../src/components/organisms/popup";
import Cookies from "js-cookie";

export default function Home() {
  return (
    <>
      <div>
        <Popup />
      </div>
      <Wrapper>
        <HomeComponents></HomeComponents>
        <Footer></Footer>
      </Wrapper>
    </>
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
