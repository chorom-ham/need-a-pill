import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Text from "../../atoms/text";
import axios from "axios";
import Link from "next/link";

export default function alphabetResultContainer(props) {
  const [{ data, isLoading, isError }] = useAlphabetSymptomsSearchApi(
    props.alphabet
  );
  return (
    <Wrapper>
      <Text level={4} align="left" color="#3446d4" spacing="-0.048rem">
        {props.alphabet}
      </Text>
      {data && (
        <div>
          {data.symptoms.map(value => (
            <Link href={`search-result2?keyword=${value}&page=2`}>
              <A>
                <Text level={4} align="left" color="#333" spacing="-0.048rem">
                  {value}
                </Text>
              </A>
            </Link>
          ))}
        </div>
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

const Wrapper = styled.div`
  background-color: transparent;
  border-top:0.2rem solid #ececf0
  width: 31.2rem;
  display: flex;
  flex-direction: column;
  padding: 1.2rem 1.6rem;
  box-sizing: border-box;
`;

const A = styled.a`
  text-decoration: none;
`;
