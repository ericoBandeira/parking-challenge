import styled from "styled-components";
import { colors, fonts, radius } from "../../styles/global";

export const ContainerDetail = styled.div`
  margin-left: 2rem;
`;

export const LabelTitle = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: ${fonts.sizeSm};
  line-height: 16px;
  text-transform: uppercase;

  color: ${colors.grey};
`;

export const PlateLabel = styled.p`
  margin: 0 0 1.5rem 0;
  font-style: normal;
  font-weight: normal;
  font-size: ${fonts.sizeXXlg};
  line-height: 52px;

  color: ${colors.blueLight};
`;

export const NormalLabel = styled.p`
  margin-top: 0;
  font-style: normal;
  font-weight: normal;
  font-size: ${fonts.sizelg};
  line-height: 33px;

  color: ${colors.black};
`;
