import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";
import Text from "../atoms/text";
import ErrorImage from "../atoms/icon/curious-doctor";
import TextBox from "../molecules/text-box/show-selected";
import Filter from "../organisms/Tab/filter";
import MedicineCard from "../organisms/medicine-card";
import axios from "axios";

export default function searchResult() {
  const [query, setQuery] = useState();
  const router = useRouter();
  const [{ data, isLoading, isError }, doFetch] = useSymptomSearchApi(
    router.query.keyword,
    router.query.filter,
    router.query.page
  );

  if (isLoading) {
    return (
      <>
        <TextBox selected={router.query.keyword}></TextBox>

        <div>Loading...</div>
      </>
    );
  }

  if (isError) {
    return <div>Error!!...</div>;
  }
  return (
    <Wrapper>
      <BoxWrapper>
        <TextBox selected={router.query.keyword}></TextBox>
      </BoxWrapper>

      {data && data.length == 0 && (
        <ErrorWrapper>
          <ErrorImage
            style={{ width: "10.7rem", height: "11.5rem" }}
            fill="#3446d4"
          ></ErrorImage>
          <Text level={5} spacing="-0.056rem" align="center" color="#3446d4">
            Sorry, no related search results. Please check your search again.
          </Text>
        </ErrorWrapper>
      )}
      {data && (
        <div>
          {data.map((value, index) => (
            <MedicineCard
            key={index}
            engName={value.eng_name}
            krName={value.kr_name}
            effects={
              value.effects.length
                ? value.effects
                : value.effects.map(value => <Li>{value}</Li>)
            }
            dosages={
              value.dosage.length
                ? value.dosage.map(value => <Li>{value}</Li>)
                : value.dosage
            }
            ></MedicineCard>
          ))}
        </div>
      )}
    </Wrapper>
  );
}

const useSymptomSearchApi = (initialSearch, initialFilter, initialPageNum) => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState(initialSearch);
  const [filter, setFilter] = useState(initialFilter);
  const [pageNum, setPageNum] = useState(initialPageNum);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(
          `https://needapill-server.herokuapp.com/drugs/symptom?keyword=${search}&page_num=${pageNum}`
        );
        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, [search]);

  return [{ data, isLoading, isError }, setSearch];
};

const Wrapper = styled.div``;

const BoxWrapper = styled.div`
  margin-bottom: 2rem;
`;

const ErrorWrapper = styled.div`
  margin: 7rem auto;
  display: flex;
  width: 19.4rem;
  height: 17rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
