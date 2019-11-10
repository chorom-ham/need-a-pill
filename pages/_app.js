import React from "react";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import withGA from "next-ga";

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

@media (max-width: 252px) {
  html {
    font-size: 7px;
  }
}
@media (min-width: 253px) and (max-width: 288px) {
  html {
    font-size: 8px;
  }
}
@media (min-width: 289px) and (max-width: 324px) {
  html {
    font-size: 9px;
  }
}
@media (min-width: 325px) and (max-width: 360px) {
  html {
    font-size: 10px;
  }
}
@media (min-width: 361px) and (max-width: 396px) {
  html {
    font-size: 11px;
  }
}
@media (min-width: 397px) and (max-width: 432px) {
  html {
    font-size: 12px;
  }
}
@media (min-width: 433px){
  html {
    font-size: 13px;
  }
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 0.1rem;
  background-color:#ccc;
}
::-webkit-scrollbar {
  display: none;
}
input {
  -webkit-appearance: none;
  -webkit-border-radius: 0;
}
html,
          body,
          body > div:first-child{
            height: 100%;
          }
`;

class Needapill extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <Head>
          <title>Need a Pill</title>
        </Head>
        <BestWrapper>
          <Grey />
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
          <Grey />
        </BestWrapper>
      </>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 36rem;
  min-height: 100%;
  background-color: white;
  position: relative;
`;

const Grey = styled.div`
  flex: 1;
  background-color: #ccc;
  z-index: 100;
`;

const BestWrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100%;
  height: 100%;
  background-color: #fff;
`;

export default withGA("UA-151446008-1", Router)(Needapill);
