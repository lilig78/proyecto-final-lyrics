import React, { useState, useEffect } from 'react';
import FiltroCancion from './components/FiltroCancion/FiltroCancion';
import Cancion from './components/Cancion/Cancion';
import InfoCancion from './components/InfoCancion/InfoCancion';
//HTTP Request => que devuelve una promesa
import axios from 'axios';
import './App.css';



function App() {
  //VARIABLES
  const [textoCancion, setTextoCancion] = useState();
  const [nomCancion, setNombreCancion] = useState([]);
  const requerimiento ='https://cors-anywhere.herokuapp.com/';
  const endpoint ='https://api.musixmatch.com/ws/1.1/';
  const apikey ='bbe53eb599a9550d301340c880100457';

  const handleChange = (event) => { /* se ejecuta cada vez que se hace cambios*/
    setTextoCancion(event.target.value); /* para que reconozca los cambios ingresados */
  }

  useEffect(() => {
    console.log('mi componente se montó');
  }, []); /* , si está vacío se va a ejecutar cuando el componente se ponga */

  useEffect(() => { /* es importante para hacer una peticion antes que cargue el componente */
    console.log('el valor de textoCancion cambió');
    /* https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=gasolina&apikey=fa9bf33f5d2010c8d6909b728684095b */
    axios.get(`${requerimiento}${endpoint}track.search?q_track=${textoCancion}&apikey=${apikey} `) 
    .then((info) => setNombreCancion(info.data.message.body.track_list)  ) /* console.log(info.track_list)*/
    .catch((error) => alert(error)) /* () => alert("ocurrió un error") */
  }, [textoCancion]); /* , si está vacío se va a ejecutar cuando el componente se ponga */

  return (
    <section>
      <h1 className="text-center">Canciones</h1>
      <div className="container">
        <div className="input-group input-group-lg">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-lg">Busca tu Canción</span>
          </div>
          {/* aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" */}
          <input type="text" className="form-control"  onChange={handleChange} /> {/*handleChange se dispara el evento cada que se realice un cambio */}
        </div>
        <br/>
        <div className="row">
         {/* {nomCancion.map(( cancion) => <Cancion nombre={cancion.nombre} album="Barrio Fino" cantante="Daddy Yankee" />)}  */}
         {nomCancion.map((cancion) => <Cancion nombre={cancion.track.track_name} album={cancion.track.album_name} cantante={cancion.track.artist_name} />)} 
          {/* <h1>{JSON.stringify(nomCancion)}</h1> */}
         <Cancion nombre="gasolina" album="Barrio Fino" cantante="Daddy Yankee" />
         <Cancion nombre="Camisa negra" album="Mi Sangre" cantante="Juanes" />
        </div>
      </div>
    </section>
  );
}

export default App;
