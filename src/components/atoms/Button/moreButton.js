import styled, { css } from "styled-components";

export default styled.button`
  width: 100%;
  height: 4rem;
  background-color: #3446d4;
  box-shadow: 0 0.4rem 0.8rem 0 #e0dfe7;
  border: none;
  display: flex;
  flex-direction: row;
  ${props => css`
    border-bottom-right-radius: ${props.bottomRadius};
    border-bottom-left-radius: ${props.bottomRadius};
    justify-content: ${props.justify};
    align-items: ${props.align};
  `}
`;
