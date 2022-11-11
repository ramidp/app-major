import React, {useEffect} from 'react';
import db from '../firebase/firebaseConfig'
import { query,collection, onSnapshot, limit, orderBy} from "firebase/firestore";
import SalaDeChat from './Chats'
import 'bootstrap/dist/css/bootstrap.min.css';

const Datos = () => {
    
    useEffect (() => {
        console.log('Info lodaded')
        
        const consulta = query(
            collection(db, 'datos-1'),
            limit(5),
            orderBy('fecha', 'desc')
        );

        onSnapshot(
            consulta,
            (snapshot) => {
                const arregloDatos = () : any => snapshot.docs.map((documento) => {
                    return {...documento.data(), id: documento.id}
                })
                cambiarDatos(arregloDatos);
            },
            (error) => {
                console.log('There was an error loading info')
                console.log(error)
            }
        )
    },[])

    const [datos, cambiarDatos] = React.useState<any[]>([])
  
    return ( 
        <div id="idParrafos" className="col-12">
            {datos.map((dato) => {
            return (
                <SalaDeChat
                key={dato.id}
                id={dato.id}
                mensaje={dato.mensaje}/>
                )
            })}
        </div>
    );
}



 
export default Datos;