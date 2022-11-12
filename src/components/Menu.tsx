import  styled from 'styled-components';
import MenuMobile from './MenuMainMobile';

// Test Actualizando Github
// V4

const MainMenu = ({handleChangeTheme} : any)  => {
 
    return ( 
        <MenuBar>
            <MenuDiv>
                <div className="center">
                    <MenuMobile handleChangeTheme={handleChangeTheme}/>
                </div>
            </MenuDiv>
        </MenuBar>
    
     );
}

export default MainMenu;

// Styled-components

const MenuBar = styled.div` 
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 100;
    top: 0;
    width: 100%;
    background-color: ${props => props.theme.primary};
    box-shadow: rgba(56, 34, 34, 0.24) 0px 3px 8px;

  .center  {
    display: flex;
    justify-content: center;
    width: 100%;@media (max-width: 540px) {
    h2 {
        padding: 0;
    }
  }
    a {
      text-decoration: none;
      color: ${props => props.theme.fontPrim};
      h2 {
        font-size: 1.2em;
        margin: 0 10px;
        padding: 0.5em 0.8em;
        border-radius: 10px;
        &:hover {
          border-radius: 10px;
          color: ${props => props.theme.secondary}
        }
      }
  }
  
  .btn1 {
        h2 {
          font-size: 1.2em;
          padding: 0.5em 0.8em;
          margin: 0 10px;
        }
    }
  }
  @media (max-width: 540px) {
    .center .btn1 h2, .center a h2 {
        margin: 0 2px;
        padding: 0.2em 0.4em;
    }
  }
`

const MenuDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.primary};
  width: 90%;

  .bg-light{
    --bs-bg-opacity: 0;
  }
.navbar {
  width: 100%;
  }
.navbar-nav {
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5px;
  }
  

`

