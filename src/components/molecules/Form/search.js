import React, { useState } from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import SearchIcon from "../../atoms/Button/icon/search";
import { useRouter } from "next/router";
import BarcodeIcon from "../../atoms/Button/icon/barcode";

function searchForm(props) {
  const [query, setQuery] = useState();
  const filter = "relevance";
  const page_num = 2;
  const router = useRouter();

  return (
    <Wrapper>
      <Input
        type="text"
        name="keyword"
        placeholder="Enter drug name / barcode"
        value={query}
        onChange={event => {
          setQuery(event.target.value);
          if (props.setQuery) {
            props.setQuery(event.target.value);
          }
        }}
        onKeyPress={event => {
          if (event.key === "Enter") {
            if (query != undefined) {
              if (props.onClick) props.onClick();
              else
                router.push(
                  `/search-result?keyword=${query}&filter=${filter}&page=${page_num}`
                );
            }
          }
        }}
      ></Input>
      <BarcodeButton>
        <BarcodeIcon
          style={{ width: "2.4rem", height: "2.4rem" }}
          fill="#333"
        ></BarcodeIcon>
      </BarcodeButton>
      <SearchButton
        onClick={() => {
          if (query != undefined) {
            if (query != undefined) {
              if (props.onClick) props.onClick();
              else
                router.push(
                  `/search-result?keyword=${query}&filter=${filter}&page=${page_num}`
                );
            }
          }
        }}
      >
        <SearchIcon
          style={{ width: "2.4rem", height: "2.4rem" }}
          fill="#333"
        ></SearchIcon>
      </SearchButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;
const Input = styled.input`
  width: 31.2rem;
  height: 4.2rem;
  border-radius: 0.8rem;
  box-shadow: 0 0.4rem 0.8rem 0 #e0dfe7;
  background-color: white;
  border: none;
  padding: 0 1.6rem;
  box-sizing: border-box;
  letter-spacing: -0.05rem;
  font-size: 1.2rem;
  margin: 0 auto;
`;
const SearchButton = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  right: 9%;
  border: none;
  background-color: transparent;
  padding: 0;
  flex-direction: column;
  justify-content: center;
`;

const BarcodeButton = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  right: 16%;
  border: none;
  background-color: transparent;
  padding: 0;
  flex-direction: column;
  justify-content: center;
`;

export default searchForm;
