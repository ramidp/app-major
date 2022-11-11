import { addDoc, collection, query } from 'firebase/firestore';
import React, { useState } from 'react'
import styled from 'styled-components';
import db from '../firebase/firebaseConfig'
import CardsMain2 from './CardsMain2';


const FormularioMain2 = () => {


    const [name, setName] = useState<string>('')
    const [price, setPrice] = useState<number | string>('')
    const [description, setDescription] = useState<string>('')

    const consulta = query(
        collection(db, 'datos-form')
    )


    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (name !==  "" && price !== "" && description !== "") {
            try {
                await addDoc(collection(db, 'datos-form'),
                {
                    name: name,
                    price: price,
                    description: description,
                    fecha: new Date()
                });
            } catch (error) {
                console.log(error);
            }
            setName('');
            setPrice('');
            setDescription('');
        } else {
            alert('Please fill all the fields!')
        }
    }



    return ( 
        <FormularioContainer>
            <Formulario onSubmit={onSubmit}>

                <label htmlFor="name" >Product Name</label>
                <input 
                    placeholder="Name" 
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}    
                    type="text" />

                <label htmlFor="price">Price $</label>
                <input 
                    placeholder="$" 
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)} 
                    type='number' />


                <label htmlFor="description">Description</label>
                <input 
                    placeholder="Description" 
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} 
                    type="text" />

                {/* <label htmlFor="fileimage">Choose a profile picture:</label>
                <input type="file"
                    id="fileimage" name="fileimage"
                    accept="image/png, image/jpeg"/> */}

                <button type="submit">Add</button>
            </Formulario>
            <CardsMain2/>
        </FormularioContainer>
     );
}
 
export default FormularioMain2;


const FormularioContainer = styled.div`
    width: 100%;
`

const Formulario = styled.form`
    width: 100%;
    padding: 5px;
    label {
        color: ${props => props.theme.fontPrim};
        font-weight: bold;
        margin-bottom: 5px;
        align-self: flex-start;
    }
    input {
       padding-left: 10px;
       border: 2px solid rgba(0,0,0,.2);
       margin: 0;
       min-height: 2.5em;
       margin-bottom: 15px;
       border-radius: 3px;
       width: 100%;
       outline: none;
            &:focus {
                border: 2px solid ${props => props.theme.fontSecond};
            }
    }
    button {
        color: ${props => props.theme.fontPrim};
        border: none;
        padding: 10px;
        border-radius: 5px;
        background: ${props => props.theme.secondary};
        width: 100%;
        &:hover {
            background: ${props => props.theme.tertiary};
        }
    }
`
