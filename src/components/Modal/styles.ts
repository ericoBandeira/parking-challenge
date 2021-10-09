import styled, { createGlobalStyle } from "styled-components";
import { colors, radius } from "../../styles/global";

export const GlobalStyle = createGlobalStyle`
  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }
`;

export const StyledContainer = styled.div`
  padding: 1.5rem 1rem;
`;

export const StyledModal = styled.div`
  text-align: center;
  background: ${colors.white};
  border-radius: ${radius.sizeSm};
  border: 1px solid ${colors.grey};
  bottom: auto;
  left: 50%;
  max-width: 500px;
  padding: 0;
  position: absolute;
  right: auto;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export const OverlayStyle = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.51);
`;
