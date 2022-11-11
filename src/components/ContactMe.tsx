import {  } from '@fortawesome/fontawesome-svg-core'
import styled from 'styled-components';


const ContactMe = () => {
    return ( 
        <OffCanvas>
            <div>
                <a href="https://www.facebook.com/rdepalo/"  target="_blank" >Facebook</a>
                <a href="https://www.instagram.com/talestoldby/" target="_blank" >Instagram</a>
                <a href="https://www.linkedin.com/in/ramiro-l-de-palo-551a8a246/" target="_blank" >LinkedIn</a>
            </div>
        </OffCanvas>
     );
}
 
export default ContactMe;


const OffCanvas = styled.div`
  display: flex;
  color: ${props => props.theme.fontPrim};
  flex-direction: row;
  background-color: ${props => props.theme.primary};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 1em 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  min-height: 70px;
  padding: 0 30px;
  
 a {
    padding: 1.5em 1em;
    font-size: 1em;
    text-decoration: none;
    color: ${props => props.theme.fontPrim};
    transition: 0.65s ease all;
    &:hover {
      background: ${props => props.theme.secondary};
    }
  }
`
