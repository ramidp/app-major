import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'
import LeftCanvas from './Left-Canvas';
import styled from 'styled-components';

const logoinfi = require('../components/images/infi-logo.png')

const MenuMobile = (props : {handleChangeTheme: () =>void}) => {


  return (
    <Navbar className="navbar p-0" expand="md">
      <Container className="mobileMenu">
        <Left >
          <Logo href="/">
              <img className="infilogo" src={logoinfi} alt="Logo" />
          </Logo>
          <BotonTheme>
              <button onClick={props.handleChangeTheme}>Another color?</button>
          </BotonTheme>
        </Left>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLinkContainer>
              <NavLink to="/" end><h2>Gallery</h2></NavLink>
              <NavLink to="/main2"><h2>Cards</h2></NavLink>
              <NavLink to="/main3"><h2>Story</h2></NavLink>
            </NavLinkContainer>
            <LeftCanvas/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MenuMobile;


// Styled-components 

const Left = styled.div`

  display: flex;
`

const BotonTheme = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
      button {
        display: inline;
        border: none;
        color: ${props => props.theme.fontPrim};
        background-color: ${props => props.theme.secondary};
        border-radius: 5px;
        padding: 10px;
        &:hover {
          background-color: ${props => props.theme.tertiary};
        }
      }

`


const NavLinkContainer = styled.div`
    display: flex;
      .active {
          h2 {
        color: ${props => props.theme.secondary};
      }
    }

`

const Logo = styled.a`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${props => props.theme.fontPrim};
  font-weight: bold;
  padding-left: 10px;
      img {
      max-width: 4.5em; 
      max-height: 4.5em; 
      object-fit: scale-down;
      object-position: 60% 60%;
      filter: invert(100%);
      transition: 0.8s ease all;
      &:hover {
        filter: invert(0%);
      }
    }
`