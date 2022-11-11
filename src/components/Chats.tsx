import { doc,deleteDoc } from "firebase/firestore";
import db from '../firebase/firebaseConfig'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";


type props = {
    id: string,
    mensaje: string,
}


const SalaDeChat = ({id,mensaje} : props) => {


    const eliminarMensaje = async (id : string )  => {
        try {
            await deleteDoc(doc(db, 'datos-1', id)); // upDatedoc es asincrona (async y await) - dos parametros / doc - tres parametros.
        } catch(error){
            console.log('Hubo un error al intentar eliminar el usuario')
            console.log(error)
        };
    }

    return ( 
        <Parrafos key={id}>
            <p style={{margin: "0"}}>{mensaje}</p>
            <BotonBorrar onClick={() => eliminarMensaje(id)}>
                <FontAwesomeIcon icon={faXmark} />
            </BotonBorrar>
        </Parrafos>
     );
}
 
export default SalaDeChat;


const Parrafos = styled.div`
    padding: 0 10px;
    font-size: 13px;
    background: white;
    border: 2px solid rgba(0,0,0,.2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;

`

const BotonBorrar = styled.button`
    font-size: 12px;
    margin: 10px;
    color: ${props => props.theme.primary};
    border: none;
    padding: 5px;
    background-color: inherit;
    cursor: pointer;
    &:hover {
        color: ${props => props.theme.secondary};
    }
`
