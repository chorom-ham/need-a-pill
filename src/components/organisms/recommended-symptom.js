import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Title from "../atoms/Button/moreButton";
import Text from "../atoms/text";
import SymptomBox from "../molecules/Button/symptom-select/recommended-symptom";
import axios from "axios";

export default function recommendedSymptoms(props) {
  const [{ data, isLoading, isError }] = useRecommendedSymptomsSearchApi(
    props.keyword,
    props.pageNum
  );

  return (
    <Wrapper>
      <Title align="left" topRadius="0.8rem">
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
      {data && (
        <div>
          {data.symptoms.map((value, index) => (
            <SymptomBox symptom={value} key={index}></SymptomBox>
          ))}
        </div>
      )}
    </Wrapper>
  );
}

const useRecommendedSymptomsSearchApi = (keyword, pageNum) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(
          `https://needapill-server.herokuapp.com/symptoms/bodypart?keyword=${keyword}&page=${pageNum}`
        );
        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, []);

  return [{ data, isLoading, isError }];
};

const Wrapper = styled.div`
  width: 31.2rem;
  margin: 2rem auto 0 auto;
  border-radius: 0.8rem;
  box-shadow: 0 0.4rem 0.8rem 0 #e0dfe7;
  background-color: #fff;
`;
