import styled from "styled-components";
import { colors, fonts } from "../../styles/global";

export const Menu = styled.ul<{ open: boolean }>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin: 0;
  button {
    text-align: left;
    border: none;
    background: none;
    cursor: pointer;
    padding: 1rem 2rem;
    font-style: normal;
    font-weight: 600;
    font-size: ${fonts.sizeMd};
    line-height: 22px;
    color: #ffffff;
  }
  @media (max-width: 768px) {
    margin-top: 3rem;
    flex-flow: column nowrap;
    background-color: ${colors.blue};
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 2rem;
    transition: transform 0.3s ease-in-out;
    button {
      font-style: normal;
      font-weight: 600;
      font-size: ${fonts.sizeMd};
      line-height: 22px;
      color: #ffffff;
      width: fit-content;
      margin: 0 0 1rem 0.5rem;
    }
  }
`;
