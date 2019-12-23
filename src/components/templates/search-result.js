import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";
import Text from "../atoms/text";
import ErrorImage from "../atoms/icon/curious-doctor";
import SearchForm from "../molecules/Form/search";
import Filter from "../organisms/Tab/filter";
import MedicineCard from "../organisms/medicine-card";
import Skeleton from "../skeleton/medicine-card-skeleton";
import axios from "axios";

export default function searchResult() {
  const [query, setQuery] = useState();
  const router = useRouter();
  const [{ data, isLoading, isError }, doFetch, setFilter] = useDrugSearchApi(
    router.query.keyword,
    router.query.filter,
    router.query.page
  );

  if (isLoading) {
    return (
      <Wrapper>
        <SearchForm
          setQuery={setQuery}
          onClick={() => doFetch(query)}
        ></SearchForm>
        <Filter setFilter={setFilter}></Filter>
        <Skeleton></Skeleton>
        <Skeleton></Skeleton>
      </Wrapper>
    );
  }

  if (isError) {
    return (
      <Wrapper>
        <SearchForm
          setQuery={setQuery}
          onClick={() => doFetch(query)}
        ></SearchForm>
        <Filter setFilter={setFilter}></Filter>
        <ErrorWrapper>
          <ErrorImage
            style={{ width: "10.7rem", height: "11.5rem" }}
            fill="#3446d4"
          ></ErrorImage>
          <Text level={5} spacing="-0.056rem" align="center" color="#3446d4">
            Sorry, no related search results. Please check your search again.
          </Text>
        </ErrorWrapper>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <SearchForm
        setQuery={setQuery}
        onClick={() => doFetch(query)}
      ></SearchForm>
      <Filter setFilter={setFilter}></Filter>
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
              img={value.img_url}
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

const useDrugSearchApi = (initialSearch, initialFilter, initialPageNum) => {
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
          `https://needapill-server.herokuapp.com/drugs/search?keyword=${search}&filter=${filter}&page_num=${pageNum}`
        );
        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, [search, filter]);

  return [{ data, isLoading, isError }, setSearch, setFilter];
};

const Wrapper = styled.div``;

const ErrorWrapper = styled.div`
  margin: 7rem auto;
  display: flex;
  width: 19.4rem;
  height: 17rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Li = styled.li`
  list-style: none;
`;
