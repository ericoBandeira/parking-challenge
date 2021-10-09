import styled from "styled-components";
import { colors, fonts, radius } from "../../styles/global";

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
  margin: 1.5rem 0 0rem 0;
  cursor: pointer;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;

  color: ${colors.blue};
`;

export const TitleModal = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-align: center;

  color: ${colors.textModal};
`;

export const PlateText = styled.p`
  margin: 0 0 1.5rem 0;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: ${fonts.sizeXXlg};
  line-height: 52px;

  color: ${colors.blueLight};
`;
