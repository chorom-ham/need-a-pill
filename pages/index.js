import React from "react";
import Head from "next/head";
import HomeComponents from "../src/components/templates/home";
import Footer from "../src/components/organisms/footer";
import styled, { css } from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <HomeComponents></HomeComponents>
      <Footer></Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
`;
