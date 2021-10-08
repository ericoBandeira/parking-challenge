import styled from "styled-components";
import { colors } from "../../styles/global";

export const ContainerHeader = styled.div`
  display: flex;
  width: 100vw;
  background-color: ${colors.blue};
  justify-content: space-between;
  padding: 1rem 0rem;
  align-items: center;
  svg {
    margin-left: 0.5rem;
  }
  div {
    margin-right: 0.5rem;
  }
`;
