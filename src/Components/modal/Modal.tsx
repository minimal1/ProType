import * as React from 'react';
import styled from 'styled-components';

const Modal = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const t: HTMLElement = e.target as HTMLElement;

    if (
      t.classList.contains('modal-container') ||
      t.classList.contains('modal-closeBtn')
    ) {
      setIsOpen(false);
    }
  };

  return (
    <React.Fragment>
      <Button onClick={() => setIsOpen(true)}>Open</Button>
      <ModalContainer
        visible={isOpen}
        className="modal-container"
        onClick={handleClose}
      >
        <ModalScreen className="modal-screen">
          <Button className="modal-closeBtn">Close</Button>
        </ModalScreen>
      </ModalContainer>
    </React.Fragment>
  );
};

const ModalContainer = styled.div<{ visible: boolean }>`
  display: ${p => (p.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  border: none;
  background-color: cornflowerblue;
  color: white;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  &:active {
    outline: none;
  }
  &:hover {
    background-color: #64a5de;
  }
`;

const ModalScreen = styled.div`
  width: 400px;
  height: 300px;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 10px 10px 40px 40px rgba(0, 0, 0, 0.1),
    -3px -5px 10px 10px rgba(0, 0, 0, 0.1) inset;
`;

export default Modal;
