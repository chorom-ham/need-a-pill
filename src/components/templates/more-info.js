import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import TopInfo from "../organisms/medicine-top-info/medicine-top-info";
import EffectsAndDosages from "../organisms/medicine-bottom-info/effects-and-dosages";
import MoreInformations from "../organisms/medicine-bottom-info/more-informations";

import { useRouter } from "next/router";

export default function MoreInfo() {
  const router = useRouter();
  const name = router.query.name;
  const [{ data, isLoading, isError }] = useDrugSearchApi(name);

  return (
    <Wrapper>
      {data && (
        <div>
          {data.map((value, index) => (
            <>
              <TopInfo
                key={index}
                engName={value.eng_name}
                krName={value.kr_name}
              ></TopInfo>
              <EffectsAndDosages
                key={index + 1}
                effects={value.effects}
                dosages={value.dosage}
              ></EffectsAndDosages>
              <MoreInformations
                key={index + 2}
                description={value.description}
                substance={value.substances}
                preservation={value.preservation}
                packaging={value.packaging}
                lastDate={value.last_updated}
                ATCCode={value.ATCcode}
                link={value.external_link}
              ></MoreInformations>
            </>
          ))}
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fff;
`;

const useDrugSearchApi = name => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(
          `https://needapill-server.herokuapp.com/drugs/search?keyword=${name}`
        );
        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, [name]);

  return [{ data, isLoading, isError }];
};
