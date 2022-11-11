import styled from "styled-components";
import Calendar from "./Calendar";
import FormularioChat from "./FormularioChat";

const NotasYCalendario = () => {
    return ( 
        <NotasYCalendarioContainer>
            <div className="row">
                <div className="mt-3 col d-flex flex-column flex-md-row flex-lg-column">
                    <Calendar/>
                    <FormularioChat/>
                </div>
            </div>
        </NotasYCalendarioContainer>
     );
}

export default NotasYCalendario;

// Styled-components

const NotasYCalendarioContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
`