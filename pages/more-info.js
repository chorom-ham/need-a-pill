import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled, { css } from "styled-components";
import MainHeader from "../src/components/organisms/Header/mainHeader";
import SearchForm from "../src/components/molecules/Form/search";
import Filter from "../src/components/organisms/Tab/filter";

export default function BeforeSearch() {
  return (
    <>
      <Head>
        <title>Need a Pill</title>
      </Head>
      <MainHeader></MainHeader>
      <SearchForm></SearchForm>
      read more 누르면 연결되는 페이지
    </>
  );
}
