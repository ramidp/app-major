import { deleteDoc, doc } from "firebase/firestore";
import styled from "styled-components";
import db from "../firebase/firebaseConfig";
import { faXmark} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type props = {
    name: string,
    price: string | number,
    description: string,
    id: string,
}

const Cards = ({name, price, description, id } : props) => {

    const eliminarMensaje = async (id : string ) => {
        try {
            await deleteDoc(doc(db, 'datos-form', id));
        } catch(error){
            console.log('Hubo un error al intentar eliminar el usuario')
            console.log(error)
        };
    }


    return (
            <Datos key={id}>
                <NameAndClose>
                    <div>
                        <h5>Product:</h5>
                        <p> {name}</p>
                        </div>
                        <FontAwesomeIcon onClick={() => eliminarMensaje(id)} className="close" icon={faXmark} />
                </NameAndClose>
                <div className="price-tag">
                <h5>Price:</h5>
                    <p> $ {price}</p>
                </div>
                    <h5>Description:</h5>
                <p>{description}</p>
            </Datos>
     );
}


const Datos = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 10px; 
    padding: 10px;
    width: 45%;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;    
    box-sizing: border-box;
    font-size: 14px;
    h5 {
        font-size: 15px;
    }
    .price-tag {
        display: flex;
        flex-direction: row;
        p {
            margin-left: 5px;
        }
    }
@media (max-width: 500px) {
    width: 100%;
}

`

const NameAndClose = styled.div`
    display: flex;
    justify-content: space-between;
    .close {
        font-size: 12px;
        color: ${props => props.theme.primary};
        padding: 0 5px;        
        cursor: pointer;
        &:hover {
            color: ${props => props.theme.secondary};
        }
    }
`
export default Cards;