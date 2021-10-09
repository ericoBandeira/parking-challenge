import * as React from 'react';
import ModalComponent, { Props } from 'react-modal';
import * as Styles from './styles'

type ModalProps = {
  children: React.ReactNode;
} & Props;

ModalComponent.setAppElement('#root');

export function Modal({ children, ...rest }: ModalProps) {
  return (
    <>
      <Styles.GlobalStyle />
      <ModalComponent
        {...rest}
        className="_"
        overlayClassName="_"
        contentElement={(props, children) => <Styles.StyledModal {...props}>{children}</Styles.StyledModal>}
        overlayElement={(props, contentElement) => (
          <Styles.OverlayStyle {...props}>{contentElement}</Styles.OverlayStyle>
        )}
      >
        {children}
      </ModalComponent>
    </>
  );
}