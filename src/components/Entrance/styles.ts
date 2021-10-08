import styled from "styled-components";
import { colors, fonts, radius } from "../../styles/global";

export const ContainerEntrance = styled.div`
  padding: 2rem 1rem;
  background: ${colors.white};
  border-radius: 0px 0px ${radius.sizeSm} ${radius.sizeSm};
`;

export const EntranceInputText = styled.p`
  text-align: left !important;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;

  text-align: center;

  color: #9b9b9b;
`;

export const EntranceInput = styled.input`
  background: #fffbe6;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  border-radius: ${radius.sizeSm};
  outline: 0;
  padding: 1.5rem 1.5rem;
  color: ${colors.black};
  font-size: ${fonts.sizelg};

  ::placeholder {
    color: ${colors.grey};
    font-size: ${fonts.sizelg};
  }
`;
