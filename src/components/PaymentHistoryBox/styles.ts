import styled from "styled-components";
import { colors, fonts, radius } from "../../styles/global";

export const HistoryBox = styled.div`
  justify-content: space-between;
  padding: 0 3rem 0 1rem;
  display: flex;
  margin: 1rem;
  background: ${colors.white};
  border: 1px solid ${colors.borderBox};
  box-sizing: border-box;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: ${radius.sizeMd};
`;

export const StyledTitle = styled.p`
  margin: 1rem 0 0 0;
  font-style: normal;
  font-weight: normal;
  font-size: ${fonts.sizeSm};
  line-height: 16px;
  text-transform: uppercase;

  color: ${colors.grey};
`;

export const StyledBody = styled.p`
  margin: 0 0 1rem 0.2rem;
  font-style: normal;
  font-weight: normal;
  font-size: ${fonts.sizelg};
  line-height: 33px;

  color: ${colors.black};
`;
