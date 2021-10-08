import styled from "styled-components";
import { colors, radius } from "../../styles/global";

export const ContainerExit = styled.div`
  padding: 2rem 10rem;
  background: ${colors.white};
  border-radius: 0px 0px ${radius.sizeSm} ${radius.sizeSm};
  text-align: center;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const BackgroundNoneButton = styled.button`
  border: none;
  background: none;
  margin-top: 1.5rem;
  cursor: pointer;

  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;

  color: ${colors.blue};
`;
