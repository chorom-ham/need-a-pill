import React from "react";
import styled from "styled-components";
import Header from "../src/components/organisms/Header/menuHeader";
import Posts from "../src/components/templates/about";

export default function About() {
  return (
    <>
      <Header headerText="About"></Header>
      <Posts></Posts>
    </>
  );
}
