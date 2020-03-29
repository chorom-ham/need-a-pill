import React from "react";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import withGA from "next-ga";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "../src/store";
import { persistStore } from "redux-persist";
import styled, { createGlobalStyle } from "styled-components";
import dotenv from "dotenv";

dotenv.config();

const store = configureStore();
const persistor = persistStore(store);

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
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyle />
          <Head>
            <title>Need a Pill</title>
            <link rel="shortcut icon" href="favicon.ico"></link>
          </Head>
          <BestWrapper>
            <Grey />
            <Wrapper>
              <Component {...pageProps} />
            </Wrapper>
            <Grey />
          </BestWrapper>
        </PersistGate>
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
