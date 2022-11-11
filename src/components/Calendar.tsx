import {useState} from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import styled from 'styled-components';

const Calendar = () => {
    
const [selected, setSelected] = useState<Date>()
 

return ( 
    <Contenedor className="ms-2 col-12 col-md col-lg-12">
            <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                />
        </Contenedor>
     );
    }
    
    export default Calendar;
    
    //Styled-components


const Contenedor = styled.div`

    display: flex;

    .rdp {
        justify-content: flex-start;
        --rdp-cell-size: 40px;
        --rdp-background-color:${props => props.theme.secondary};
    }
    .rdp-month {
        background-color: ${props => props.theme.primary};
        font-size: 0.85em;
        color: ${props => props.theme.fontPrim};
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 10px;
        border-radius: 10px;
    }
    .rdp-cell {
        padding: 0;
    }
    .rdp-day_selected {
        background: ${props => props.theme.secondary};
    }
    .rdp-day_today:not(.rdp-day_outside) {
        border: 2px solid ${props => props.theme.secondary};
    }
    @media (max-width: 1400px) {
        .rdp {
            width: 100%;
            --rdp-cell-size: 35px;
        }
    }
    @media (max-width: 992px) {
        .rdp {
            width: 100%;
            --rdp-cell-size: 35px;
        }
    }
`