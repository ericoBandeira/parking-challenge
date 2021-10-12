import { Link } from "react-router-dom";
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
  div {
    margin-top: 1rem;
  }
`;

export const BackgroundNoneButton = styled(Link)<{ disabled: boolean }>`
  text-decoration: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-style: normal;
  font-weight: 600;
  font-size: ${fonts.sizeMd};
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;

  color: ${({ disabled }) => (disabled ? colors.grey : colors.blue)};
`;
