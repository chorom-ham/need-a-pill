import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled, { css } from "styled-components";
import MainHeader from "../src/components/organisms/Header/mainHeader";
import SearchForm from "../src/components/molecules/Form/search";
import TopInfo from "../src/components/organisms/medicine-top-info/medicine-top-info";
import EffectsAndDosages from "../src/components/organisms/medicine-bottom-info/effects-and-dosages";
import MoreInformations from "../src/components/organisms/medicine-bottom-info/more-informations";

export default function BeforeSearch() {
  return (
    <>
      <Head>
        <title>Need a Pill</title>
      </Head>
      <MainHeader></MainHeader>
      <SearchForm></SearchForm>
      <TopInfo></TopInfo>
      <EffectsAndDosages></EffectsAndDosages>
      <MoreInformations></MoreInformations>
    </>
  );
}
