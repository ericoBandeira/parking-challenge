import styled from "styled-components";
import { colors, radius, fonts } from "../../styles/global";

export const EntranceInputText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;

  text-align: center;

  color: ${colors.grey};

  @media (max-width: 768px) {
    text-align: left !important;
  }
`;

export const EntranceInput = styled.input<{ plateError: boolean }>`
  text-align: center;
  width: 100%;
  background: ${colors.yellowLight};
  border: 1px solid ${colors.greyInput};
  box-sizing: border-box;
  border-radius: ${radius.sizeSm};
  outline: 0;
  padding: 1.5rem 4rem;
  color: ${({ plateError }) => (plateError ? colors.redText : colors.black)};
  font-size: ${fonts.sizelg};
`;
