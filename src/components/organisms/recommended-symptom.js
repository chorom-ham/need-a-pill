import React from "react";
import styled from "styled-components";
import Title from "../atoms/Button/moreButton";
import Text from "../atoms/text";
import SymptomBox from "../molecules/Button/symptom-select/recommended-symptom";

export default function recommendedSymptoms(props) {
  let index = -1;
  for (let i = 0; i < 20; i++) {
    if (symptoms[i].body === props.keyword) index = i;
  }

  return (
    <Wrapper>
      <Title align="center" topRadius="0.8rem">
        <Text
          level="4"
          weight="bold"
          spacing="-0.048rem"
          color="white"
          align="left"
        >
          Recommended Symptoms
        </Text>
      </Title>
      {symptoms[index].symptom.map((value, index) => (
        <SymptomBox symptom={value} key={index}></SymptomBox>
      ))}
    </Wrapper>
  );
}

const symptoms = [
  {
    body: "Eye",
    symptom: [
      "Conjunctivitis",
      "Dry eye syndrome",
      "Corneal haze",
      "Corneal ulcer"
    ]
  },
  {
    body: "Nose",
    symptom: [
      "Allergic rhinitis",
      "Sneezing",
      "Vasomotor rhinitis",
      "Nasal bleeding",
      "Runny nose"
    ]
  },
  {
    body: "Mouth",
    symptom: ["Stomatitis", "Dry mouth", "Coughing", "Sneezing"]
  },
  {
    body: "Teeth gum",
    symptom: ["Infected wounds", "Inflammation", "Stomatitis"]
  },
  {
    body: "Ear",
    symptom: ["Inflammation", "Motion sickness", "Insect bites"]
  },
  {
    body: "Head",
    symptom: ["Fatigue", "Motion sickness", "Nausea"]
  },
  {
    body: "Neck Area",
    symptom: [
      "Dermatitis",
      "Stiff neck",
      "Insect bites",
      "Bruises",
      "Shoulder stiffness"
    ]
  },
  {
    body: "Throat",
    symptom: ["Sore throat", "Stomatitis", "Coughing", "Sneezing"]
  },
  {
    body: "Arm",
    symptom: ["Wound", "Bruises", "Insect bites", "Itching", "Dermatitis"]
  },
  {
    body: "Foot",
    symptom: ["Sprain", "Bruises", "Muscle pain", "Fracture"]
  },
  {
    body: "Leg",
    symptom: ["Wound", "Insect bites", "Itching", "Dermatitis"]
  },
  {
    body: "Joints",
    symptom: ["Sprain", "Fracture", "Joint pain"]
  },
  {
    body: "Stomach",
    symptom: ["Burping", "Heartburn", "Indigestion", "Stomachache", "Vomiting"]
  },
  {
    body: "Liver",
    symptom: ["Primary Biliary Cirrhosis", "Hepatitis c", "Gall stones"]
  },
  {
    body: "Lungs",
    symptom: ["Coughing"]
  },
  {
    body: "Abdomen",
    symptom: ["Muscle pain", "Cramps", "Stomachache"]
  },
  {
    body: "Muscles",
    symptom: ["Muscle pain", "Bruises", "Cramps"]
  },
  {
    body: "Waist",
    symptom: ["Low back pain", "Joint pain", "Muscle pain"]
  },
  {
    body: "Menstrual Pain",
    symptom: ["Menstrual pain"]
  },
  {
    body: "Hand",
    symptom: ["Cold hands and feet", "Swelling of the hands and feet"]
  }
];

const Wrapper = styled.div`
  width: 31.2rem;
  margin: 2rem auto 0 auto;
  border-radius: 0.8rem;
  box-shadow: 0 0.4rem 0.8rem 0 #e0dfe7;
  background-color: #fff;
`;
