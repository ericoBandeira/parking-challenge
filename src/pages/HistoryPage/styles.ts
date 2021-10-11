import styled from "styled-components";
import { colors, fonts, radius } from "../../styles/global";

export const ContainerHistory = styled.div`
  margin: 2.5rem 0.5rem;
  background-color: ${colors.white};
  border-radius: ${radius.sizeSm};
`;

export const HistoryHeader = styled.div`
  padding: 1rem 1.5rem;
  align-items: center;
  display: flex;
  button {
    cursor: pointer;
    background: none;
    border: none;
  }
  svg {
    margin-right: 1rem;
  }
`;

export const HistoryTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: ${fonts.sizelg};
  line-height: 33px;

  color: ${colors.blueLight};
`;
