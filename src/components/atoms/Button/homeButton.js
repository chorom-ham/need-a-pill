import styled, { css } from "styled-components";

export default styled.button`
  ${props => css`
    width: 10rem;
    height: 10rem;
    border-radius: 1.2rem;
    box-shadow: 0 0.4rem 0.8rem 0 #e0dfe7;
    background-color: #3446d4;
    color: #ffffff;
  `}
`;
