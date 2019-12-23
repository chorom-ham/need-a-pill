import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReadMoreButton from "../molecules/Button/more-button/show-more";
import Text from "../atoms/text";
import axios from "axios";
import Link from "next/link";
import AlphabetBox from "../molecules/Button/symptom-select/alphabet";

export default function alphabetical() {
  const [closed, setClosed] = useState(true);
  const [selected, setSelected] = useState("A");

  const getAlphabet = items => (
    <>
      <ButtonRow>{items.slice(0, 8).map(getButton)}</ButtonRow>
      <ButtonRow>{items.slice(8, 16).map(getButton)}</ButtonRow>
      <ButtonRow>{items.slice(16, 24).map(getButton)}</ButtonRow>
      <ButtonRow>{items.slice(24, 26).map(getButton)}</ButtonRow>
    </>
  );

  const getButton = (item, index) => {
    return (
      <AlphabetBox
        key={index}
        alphabet={item}
        selected={selected}
        setSelected={setSelected}
      ></AlphabetBox>
    );
  };

  const [{ data, isLoading, isError }] = useAlphabetSymptomsSearchApi(selected);

  return (
    <Wrapper>
      {closed && (
        <ReadMoreButton
          onClick={() => setClosed(false)}
          isClosed={closed}
          title="Alphabetical"
        ></ReadMoreButton>
      )}
      {closed || (
        <>
          <ReadMoreButton
            onClick={() => setClosed(true)}
            isClosed={closed}
            title="Alphabetical"
          ></ReadMoreButton>
          <ButtonWrapper>{getAlphabet(Alphabet)}</ButtonWrapper>
          <ResultWrapper>
            <Text
              level={4}
              align="left"
              color="#3446d4"
              spacing="-0.048rem"
              weight="bold"
            >
              {selected}
            </Text>
            {data && (
              <div>
                {data.symptoms.map(value => (
                  <Link href={`search-result2?keyword=${value}&page=2`}>
                    <A>
                      <Text
                        level={4}
                        align="left"
                        color="#333"
                        spacing="-0.048rem"
                      >
                        {value}
                      </Text>
                    </A>
                  </Link>
                ))}
              </div>
            )}
          </ResultWrapper>
        </>
      )}
    </Wrapper>
  );
}

const useAlphabetSymptomsSearchApi = char => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(
          `https://needapill-server.herokuapp.com/symptoms/firstchar?keyword=${char}`
        );
        setData(result.data);

        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, [char]);

  return [{ data, isLoading, isError }];
};

const ResultWrapper = styled.div`
  background-color: transparent;
  border-top: 0.2rem solid #ececf0;
  width: 31.2rem;
  display: flex;
  flex-direction: column;
  padding: 1.2rem 1.6rem;
  box-sizing: border-box;
`;

const A = styled.a`
  text-decoration: none;
`;

const Wrapper = styled.div`
  width: 31.2rem;
  margin: 1.2rem auto;
  border-radius: 0.8rem;
  box-shadow: 0 0.4rem 0.8rem 0 #e0dfe7;
  background-color: #fff;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const ButtonWrapper = styled.div`
  background-color: transparent;
  width: 31.2rem;
  height: 16rem;
  display: flex;
  flex-direction: column;
  padding: 1.2rem 0.8rem 0.4rem 1.6rem;
  box-sizing: border-box;
`;

const Alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
