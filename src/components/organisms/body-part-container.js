import React from "react";
import styled, { css } from "styled-components";
import BodyPartButton from "../molecules/Button/body-part";

import Eye from "../atoms/Button/icon/body-part/eye";
import Nose from "../atoms/Button/icon/body-part/nose";
import Mouth from "../atoms/Button/icon/body-part/mouth";
import TeethGum from "../atoms/Button/icon/body-part/teeth-gum";
import Ear from "../atoms/Button/icon/body-part/ear";
import Head from "../atoms/Button/icon/body-part/head";
import NeckShoulder from "../atoms/Button/icon/body-part/neck-and-shoulder";
import Throat from "../atoms/Button/icon/body-part/throat";
import Arm from "../atoms/Button/icon/body-part/arm";
import Foot from "../atoms/Button/icon/body-part/foot";
import Leg from "../atoms/Button/icon/body-part/leg";
import Joints from "../atoms/Button/icon/body-part/joints";
import Stomach from "../atoms/Button/icon/body-part/stomach";
import Liver from "../atoms/Button/icon/body-part/liver";
import Lungs from "../atoms/Button/icon/body-part/lungs";
import Abdomen from "../atoms/Button/icon/body-part/abdomen";
import Muscles from "../atoms/Button/icon/body-part/muscles";
import Waist from "../atoms/Button/icon/body-part/waist";
import MenstrualPain from "../atoms/Button/icon/body-part/menstrual-pain";
import Hand from "../atoms/Button/icon/body-part/hand";

export default function bodyPartContainer() {
  return <Wrapper>{getBodyPart(bodyPartItems)}</Wrapper>;
}

const getBodyPart = items => (
  <>
    <ButtonRow>{items.slice(0, 4).map(getButton)}</ButtonRow>
    <ButtonRow>{items.slice(4, 8).map(getButton)}</ButtonRow>
    <ButtonRow>{items.slice(8, 12).map(getButton)}</ButtonRow>
    <ButtonRow>{items.slice(12, 16).map(getButton)}</ButtonRow>
    <ButtonRow>{items.slice(16, 20).map(getButton)}</ButtonRow>
  </>
);

const getButton = (item, index) => {
  return (
    <BodyPartButton
      key={index}
      Icon={item.Icon}
      width={item.size[0]}
      height={item.size[1]}
      link={item.link}
      name={item.name}
    />
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 28.4rem;
  margin: 0 auto;
  justify-content: center;
  background-color: #fff;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.6rem;
`;

const bodyPartItems = [
  {
    Icon: Eye,
    size: [3.76, 2.37],
    name: "Eye",
    link: "/symptom-select"
  },
  {
    Icon: Nose,
    size: [2.27, 3.46],
    name: "Nose",
    link: "/symptom-select"
  },
  {
    Icon: Mouth,
    size: [3.67, 1.67],
    name: "Mouth",
    link: "/symptom-select"
  },
  {
    Icon: TeethGum,
    size: [3.05, 3.25],
    name: "Teeth gum",
    link: "/symptom-select"
  },
  {
    Icon: Ear,
    size: [2.42, 3.46],
    name: "Ear",
    link: "/symptom-select"
  },
  {
    Icon: Head,
    size: [3.04, 3.53],
    name: "Head",
    link: "/symptom-select"
  },
  {
    Icon: NeckShoulder,
    size: [3.57, 2.31],
    name: "Neck/Shoulder",
    link: "/symptom-select"
  },
  {
    Icon: Throat,
    size: [2.82, 3.66],
    name: "Throat",
    link: "/symptom-select"
  },
  {
    Icon: Arm,
    size: [3.2, 3.78],
    name: "Arm",
    link: "/symptom-select"
  },
  {
    Icon: Foot,
    size: [3.49, 2.85],
    name: "Foot",
    link: "/symptom-select"
  },
  {
    Icon: Leg,
    size: [2.13, 3.94],
    name: "Leg",
    link: "/symptom-select"
  },
  {
    Icon: Joints,
    size: [1.7, 3.57],
    name: "Joints",
    link: "/symptom-select"
  },
  {
    Icon: Stomach,
    size: [3.24, 3.24],
    name: "Stomach",
    link: "/symptom-select"
  },
  {
    Icon: Liver,
    size: [3.27, 2.2],
    name: "Liver",
    link: "/symptom-select"
  },
  {
    Icon: Lungs,
    size: [3.46, 3.1],
    name: "Lungs",
    link: "/symptom-select"
  },
  {
    Icon: Abdomen,
    size: [2.76, 2.69],
    name: "Abdomen",
    link: "/symptom-select"
  },
  {
    Icon: Muscles,
    size: [3.9, 3.88],
    name: "Muscles",
    link: "/symptom-select"
  },
  {
    Icon: Waist,
    size: [3.67, 3.37],
    name: "Waist",
    link: "/symptom-select"
  },
  {
    Icon: MenstrualPain,
    size: [3.77, 3.51],
    name: "Menstrual Pain",
    link: "/symptom-select"
  },
  {
    Icon: Hand,
    size: [2.16, 3.69],
    name: "Hand",
    link: "/symptom-select"
  }
];
