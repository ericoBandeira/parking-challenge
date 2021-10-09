import styled from "styled-components";
import { colors, fonts, radius } from "../../styles/global";

export const ContainerEntrance = styled.div`
  padding: 2rem 10rem;
  background: ${colors.white};
  border-radius: 0px 0px ${radius.sizeSm} ${radius.sizeSm};
  text-align: center;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const WaitConfirmation = styled.div`
  text-align: center;
  justify-content: center;
  background-color: ${colors.white};
  padding: 5rem 2rem;
`;
export const WaitText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: ${fonts.sizeSm};
  line-height: 22px;

  text-align: center;

  color: ${colors.textModal};
`;
