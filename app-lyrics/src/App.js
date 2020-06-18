import React, { useState, useEffect } from 'react';
import FiltroCancion from './components/FiltroCancion/FiltroCancion';
import Cancion from './components/Cancion/Cancion';
import Card from './components/Card/Card';
//HTTP Request => que devuelve una promesa
import axios from 'axios';
import './App.css';



function App() {
  //VARIABLES
  const [textoCancion, setTextoCancion] = useState();
  const [nomCancion, setNombreCancion] = useState([]);

  const endpoint ='https://api.musixmatch.com/ws/1.1/';
  const apikey ='fa9bf33f5d2010c8d6909b728684095b';

  const handleChange = (event) => { /* se ejecuta cada vez que se hace cambios*/
    setTextoCancion(event.target.value); /* para que reconozca los cambios ingresados */
  }

  useEffect(() => {
    console.log('mi componente se montó');
  }, []); /* , si está vacío se va a ejecutar cuando el componente se ponga */

  /* https://api.musixmatch.com/ws/1.1/track.search?q_track=gasolina&apikey=fa9bf33f5d2010c8d6909b728684095b */

  useEffect(() => { /* es importante para hacer una peticion antes que cargue el componente */
    console.log('el valor de textoCancion cambió');
    axios.get('https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=gasolina&apikey=fa9bf33f5d2010c8d6909b728684095b') /* `${endpoint}track.search?q_track=${textoCancion}&apikey=${apikey} ` */
    .then((info) => console.log(info)) /* setNombreCancion(info.objeto) */
    .catch(() => alert("ocurrió un error"))
  }, [textoCancion]); /* , si está vacío se va a ejecutar cuando el componente se ponga */

function App() {
  return (
    <section>
      <h1 className="text-center">Busca tu canción 🎵</h1>
      <div className="container">
        <div className="input-group input-group-lg">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-lg">Busca tu Canción</span>
          </div>
          {/* aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" */}
          <input type="text" className="form-control"  onChange={handleChange} /> {/*handleChange se dispara el evento cada que se realice un cambio */}
        </div>
        <div className="row">
          <Card img="imagen" />
          <Card img="imagen" />
          <Card img="imagen" />

        </div>
      </div>
      <FiltroCancion />
      <FiltroCancion />
      <Cancion nombre="gasolina" album="Barrio Fino" cantante="Daddy Yankee" />
      <Cancion nombre="Camisa negra" album="Mi Sangre" cantante="Juanes" />

    </section>
  );
}

export default App;
