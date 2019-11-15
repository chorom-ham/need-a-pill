import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";

import ErrorImage from "../atoms/icon/curious-doctor";
import SearchForm from "../molecules/Form/search";
import Filter from "../organisms/Tab/filter";
import MedicineCard from "../organisms/medicine-card";
import axios from "axios";

export default function searchResult() {
  const [query, setQuery] = useState();
  const router = useRouter();
  const [{ data, isLoading, isError }, doFetch] = useDrugSearchApi(
    router.query.keyword,
    router.query.filter,
    router.query.page
  );

  if (isLoading) {
    return (
      <>
        <SearchForm
          setQuery={setQuery}
          onClick={() => doFetch(query)}
        ></SearchForm>
        <Filter></Filter>
        <div>Loading...</div>
      </>
    );
  }

  if (isError) {
    return <div>Error!!...</div>;
  }
  return (
    <Wrapper>
      <SearchForm
        setQuery={setQuery}
        onClick={() => doFetch(query)}
      ></SearchForm>
      <Filter></Filter>
      {isError && <div>Error!!!!!!!!!</div>}
      {!isLoading && !data && (
        <div>
          <ErrorImage
            style={{ width: "10.7rem", height: "11.5rem" }}
            fill="#3446d4"
          ></ErrorImage>
        </div>
      )}
      {data && (
        <div>
          {data.map(value => (
            <MedicineCard
              engName={value.eng_name}
              krName={value.kr_name}
              effects={value.effects}
              dosages={value.dosage}
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
  }, [search]);

  return [{ data, isLoading, isError }, setSearch];
};

const Wrapper = styled.div``;
