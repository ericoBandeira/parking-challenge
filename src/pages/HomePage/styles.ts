import styled from "styled-components";
import { colors, radius } from "../../styles/global";

export const ContainerMenu = styled.div`
  margin: 8em 0.5rem;
  @media (max-width: 768px) {
    margin: 6em 0.5rem;
  }
`;

export const StyledChoice = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled.button<{ option: boolean }>`
  cursor: pointer;
  border-radius: ${radius.sizeSm} ${radius.sizeSm} 0px 0px;
  width: 100%;
  padding: 1rem 0;
  border: none;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: ${({ option }) => (option ? colors.blue : colors.grey)};
  background-color: ${({ option }) =>
    option ? colors.white : colors.background};
  border-bottom: ${({ option }) =>
    option ? `3px solid ${colors.blue}` : "none"};
`;
