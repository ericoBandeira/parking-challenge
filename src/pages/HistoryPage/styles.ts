import styled from "styled-components";
import { colors, fonts, radius } from "../../styles/global";

export const ContainerHistory = styled.div`
  margin: 8em 0.5rem;
  padding-bottom: 2.5rem;
  background-color: ${colors.white};
  border-radius: ${radius.sizeSm};
  @media (max-width: 768px) {
    margin: 6em 0.5rem;
  }
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

export const LoadHistoryText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: ${fonts.sizeSm};
  line-height: 22px;

  text-align: center;

  color: ${colors.textModal};
`;

export const LoadContainer = styled.div`
  padding: 3rem;
  display: grid;
  justify-content: center;
  align-items: center;
  svg {
    width: 100%;
    justify-content: center;
  }
`;
