import React, { useState } from 'react';
import FiltroCancion from './components/FiltroCancion/FiltroCancion';
import Cancion from './components/Cancion/Cancion';
import Card from './components/Card/Card';
//HTTP Request => que devuelve una promesa
import axios from 'axios';
import './App.css';



function App() {

  const [nomCancion, setNomCancion] = useState();

  return (
    <section>
      <h1 className="text-center">Busca tu canción 🎵</h1>
      <div className="container">
        <div className="input-group input-group-lg">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-lg">Busca tu Canción</span>
          </div>
          {/* aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" */}
          <input type="text" className="form-control"  onChange /> {/* se dispara el evento cada que se realice un cambio */}
        </div>
        <div className="row">
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
