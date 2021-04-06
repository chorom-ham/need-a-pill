import React from "react";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import withGA from "next-ga";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import configureStore from "../src/store";
import styled, { createGlobalStyle } from "styled-components";
import dotenv from "dotenv";

dotenv.config();

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

const siteDescription =
  "Needapillkr provides information on OTC medicine YOU need when visiting Korea";

class Needapill extends App {
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <GlobalStyle />
        <Head>
          <title>Need a Pill</title>
          <link rel="shortcut icon" href="favicon.ico"></link>
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"
          />
          <meta name="description" content={siteDescription} />
          <meta property="og:title" content={"Need a Pill"} />
          <meta property="og:description" content={siteDescription} />
          <meta
            property="og:image"
            content="https://postfiles.pstatic.net/MjAxOTEyMjZfMTU5/MDAxNTc3MzU5OTU4NDUz.2C_4Rk4BGx2GMNimVoCAgZqHzo2QQD17OqmFcx3oabwg.3DK7Jt-lWD_asA1rB493l1I_TKg1ZrmvCeGXhEKze6Ug.PNG.yadongbihs/image.png?type=w966"
          />
          <meta
            name="naver-site-verification"
            content="c1d49792ce9d0ac48e7ebc41fe63b4060490c2e4"
          />
          <meta
            name="naver-site-verification"
            content="3ea05ed2aa4dd196b25557ca12aff0ac8a6202ae"
          />
        </Head>
        <BestWrapper>
          <Grey />
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
          <Grey />
        </BestWrapper>
      </Provider>
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
  background-color: #fff;
`;

export default withRedux(configureStore)(
  withGA(process.env.GA_APP_ID, Router)(Needapill)
);
