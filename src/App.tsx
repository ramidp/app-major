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
      secondary: '#363a8d',
      tertiary: '#241e75', 
      fontPrim: "white",
      fontSecond: "black",
    }
  )

  let handleChangeTheme = () => {
    switch (theme.primary) {
      case '#545ab1':
        {setTheme({
              primary: '#3f9e4f', // El mas clarito
              secondary: '#1b682e', // El mas oscuro
              tertiary: '#449251', // Intermedio
              fontPrim: "white",
              fontSecond: "black",
            })}
        break;
        case '#3f9e4f':
        {setTheme({
              primary: '#9e3f3f', // El mas clarito
              secondary: '#681b1b', // El mas oscuro
              tertiary: '#924444', // Intermedio
              fontPrim: "white",
              fontSecond: "black",
            })}
        break;
      default:
        setTheme({
          primary: '#545ab1', 
          secondary: '#363a8d',
          tertiary: '#241e75', 
          fontPrim: "white",
          fontSecond: "black",
        })
        break;
    }
  }



  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <div className="container">
          <MainMenu handleChangeTheme={handleChangeTheme}/>
          <div className="container">
            <div className="row">
              <Div className="d-flex flex-lg-row flex-column col-12">
                  <MainTotal />
                  <NotasYCalendario/>
              </Div>
            </div>
            </div>
      </div>
      </BrowserRouter>
  </ThemeProvider>
  )
}

export default App;

const Div = styled.div`
  margin-top: 70px;  

`


