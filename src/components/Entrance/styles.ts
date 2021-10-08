import styled from "styled-components";
import { colors, radius } from "../../styles/global";

export const ContainerEntrance = styled.div`
  padding: 2rem 10rem;
  background: ${colors.white};
  border-radius: 0px 0px ${radius.sizeSm} ${radius.sizeSm};
  text-align: center;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;
