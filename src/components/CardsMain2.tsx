import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import db from "../firebase/firebaseConfig";
import Cards from "./Cards";

const CardsMain2 = () => {
    
    const consulta = query(
        collection(db, 'datos-form'),
        limit(4),
        orderBy('fecha', 'asc')
    )
    
    useEffect (() => {
        onSnapshot(
            consulta,
            (snapshot) => {
                const dataForm = snapshot.docs.map((documento) => {
                    return {...documento.data(), id: documento.id}
                })
                cambiarDatosFormulario(dataForm);
            },
            (error) => {
                console.log(error)
            }
        )
    })

    const [datosFormulario, cambiarDatosFormulario] = React.useState<any[]>([])

    return (
        <CardsContainer>   
            {datosFormulario.map((datoFormulario) => {
                return (
                    <Cards
                    id={datoFormulario.id}
                    key={datoFormulario.id}
                    name={datoFormulario.name}
                    price={datoFormulario.price}
                    description={datoFormulario.description}/>)
            })
            
            }
        </CardsContainer>
     );
}
 
const CardsContainer = styled.div`
    padding-top: 5px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`
export default CardsMain2;