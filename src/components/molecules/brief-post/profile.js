import React from "react";
import styled from "styled-components";
import Text from "../../atoms/text";
import ImgHolder from "../../atoms/image-holder/profile";

export default function Profile() {
  return (
    <>
      <ImgHolder></ImgHolder>
      <Text level={4} spacing="-0.036rem" color="#999999" weight={500}>
        Name
      </Text>
    </>
  );
}
