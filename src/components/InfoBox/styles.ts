import styled from "styled-components";
import { radius } from "../../styles/global";

export const informationContainer = styled.div<{ info: boolean }>`
  font-weight: bold;
  display: flex;
  margin-top: 1rem;
  width: 100%;
  background: ${({ info }) =>
    info ? "rgba(50, 182, 140, 0.15)" : "rgba(255, 23, 68, 0.15)"};
  border-radius: ${radius.sizeSm};
  align-items: center;
  color: grey;
  svg {
    padding: 1rem 1rem 1rem 0.5rem;
  }
`;
