import styled, { css } from "styled-components";

export default styled.button`
  width: 24rem;
  height: 3.6rem;
  border-radius: 0.8rem;
  border: none;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.7rem;
  ${props => css`
    background-color: ${props.color};
  `}
`;
