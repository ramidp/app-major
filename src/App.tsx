import { useState } from 'react';
import { BrowserRouter} from 'react-router-dom';
import styled, {ThemeProvider} from 'styled-components';
import MainTotal from './components/MainTotal';
import MainMenu from './components/Menu';
import NotasYCalendario from './components/NotasYCalendario.';


const App = ()  => {

  const [theme, setTheme] = useState(
     {
      primary: '#545ab1', 
      secondary: '#241e75', 
      tertiary: '#363a8d',
      fontPrim: "white",
      fontSecond: "black",
      svgcolor: "#05009645",
    }
  )

  let handleChangeTheme = () => {
    switch (theme.primary) {
      case '#545ab1':
        {setTheme({
              primary: '#3f9e4f', // El mas clarito
              secondary: '#1b682e', // El mas oscuro
              tertiary: '#44804f', // Intermedio
              fontPrim: "white",
              fontSecond: "black",
              svgcolor: "#11960045",
            })}
        break;
        case '#3f9e4f':
        {setTheme({
              primary: '#9e3f3f',
              secondary: '#681b1b', 
              tertiary: '#7c3030', 
              fontPrim: "white",
              fontSecond: "black",
              svgcolor: "#96050045",

            })}
        break;
      default:
        setTheme({
          primary: '#545ab1', 
          secondary: '#241e75', 
          tertiary: '#363a8d',
          fontPrim: "white",
          fontSecond: "black",
          svgcolor: "#05009645",
        })
        break;
    }
  }



  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <AppContainer className="container">
          <MainMenu handleChangeTheme={handleChangeTheme}/>
          <div className="container">
            <div className="row">
              <Div className="d-flex flex-lg-row flex-column col-12">
                  <MainTotal />
                  <NotasYCalendario/>
              </Div>
            </div>
          </div>
       </AppContainer>
      </BrowserRouter>
          <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio='none'>
            <path fill="#0099ff" d="M0,64L60,80C120,96,240,128,360,160C480,192,600,224,720,250.7C840,277,960,299,1080,288C1200,277,1320,235,1380,213.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </Svg>    
  </ThemeProvider>
  )
}

export default App;

const AppContainer = styled.div`
`

const Div = styled.div`
  margin-top: 70px;  

`
const Svg = styled.svg`
    height: 50vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: -1;
    path {
        fill: ${props => props.theme.svgcolor};
    }
`;



