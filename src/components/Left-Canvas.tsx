import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ContactMe from './ContactMe';
import styled from 'styled-components';


const LeftCanvas = () => {
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <OffCanvasContainer>
      <Boton1 className="btn1" onClick={handleShow}>
        <h2>Contact</h2>
      </Boton1>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Contact Info / Social Media</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <ContactMe/>
        </Offcanvas.Body>
      </Offcanvas>
    </OffCanvasContainer>
  );
}

export default LeftCanvas;

const OffCanvasContainer = styled.div`

  .offcanvas, .offcanvas-lg, .offcanvas-md, .offcanvas-sm, .offcanvas-xl, .offcanvas-xxl {
    background-color: red;
  }
`

const Boton1 = styled.button` 
  display: flex;
  padding: 0;
  background: inherit;
  color: ${props => props.theme.fontPrim};
  border: none;
  transition: 0.5s ease all;
  border-radius: 10px;
  background: ${props => props.theme.secondary};
  &:hover {
      background: ${props => props.theme.primary};
      color: ${props => props.theme.fontPrim};
      border-radius: 10px;
  }
`
