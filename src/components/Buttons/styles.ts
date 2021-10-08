import styled from "styled-components";
import { colors, radius } from "../../styles/global";

interface buttonProps {
  purple: boolean;
  outline: boolean;
  disabled: boolean;
}

export const ButtonContainer = styled.button<buttonProps>`
  margin-top: 5rem;
  padding: 1.5rem 0;
  width: 100%;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
  border-radius: ${radius.sizeSm};

  color: ${({ disabled, outline }) =>
    outline ? colors.purple : disabled ? colors.grey : colors.white};
  background: ${({ disabled, purple, outline }) =>
    outline
      ? colors.white
      : disabled
      ? colors.blocked
      : purple
      ? colors.purple
      : colors.green};
  border: ${({ outline }) => (outline ? `2px solid ${colors.purple}` : "none")};
`;

// ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")}
