import {useState} from 'react';
import db from '../firebase/firebaseConfig'
import { collection, addDoc} from "firebase/firestore";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Datos from './Datos';

const FormularioChat = () => {
    
    const [mensaje, cambiarMensaje] = useState('');

    const onSubmit = async (e : React.FormEvent)  => {
        e.preventDefault();

        if (mensaje == "") {
            alert("You must write a message")
        } else {
            try {
                await addDoc(collection(db, 'datos-1'),
                    {
                    mensaje: mensaje,
                    fecha: new Date(),
                });
                } catch (error) {
                    console.log(error);
                }
        }
        cambiarMensaje('');
        }


    return ( 
        <ContenidoFormulario className="ms-md-4 mt-md-3 col-12 col-md col-lg-12">
            <Formulario action="" onSubmit={onSubmit}>
                <Input
                    id={"1"}
                    type="text"
                    name="mensaje"
                    value={mensaje}
                    onChange={(e) => cambiarMensaje(e.target.value)}
                    placeholder="Quick Note"
                />
                    <Boton2 type="submit">Add</Boton2>
            </Formulario>
            <Datos/>
        </ContenidoFormulario>
        );
}
 
export default FormularioChat;

const ContenidoFormulario = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-color: ${props => props.theme.primary};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    min-height: 488px;
`

const Formulario = styled.form`
    width: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

const Input = styled.input`
    width: 100%;
    padding: 10px;
    height: 70px;
    border: 2px solid rgba(0,0,0,.2);
    border-radius: 3px;
    transition: .2s ease all;
    outline: none;
    &:focus {
        border: 2px solid ${props => props.theme.fontSecond};
    }
`;

const Boton2 = styled.button`   
    margin: 15px 10px 0 10px;
    padding: 10px 30px;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    transition: .3s ease all;
    outline: none;
    background: ${props => props.theme.secondary};
    color: ${props => props.theme.fontPrim};
    font-size: 15px;
    &:hover {
        background: ${props => props.theme.tertiary};
    }
`;
