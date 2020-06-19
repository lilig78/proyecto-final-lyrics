import React, {useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';


// http://api.musixmatch.com/ws/1.1/track.search?q_artist=daddy yankee & q_lyrics =gasolina & apikey=fa9bf33f5d2010c8d6909b728684095b 

const BusquedaCancion = () => {
    const endpoint ='http://api.musixmatch.com/ws/1.1/track.search?';
    const API_KEY = 'fa9bf33f5d2010c8d6909b728684095b'; 
    const [nuevaCancion,setNuevaCancion] = useState("");


    useEffect(() => {
        axios.get(`${endpoint}API_KEY=${API_KEY}&q_lyrics=${nuevaCancion}`)
        .then(({data}) => {
           setNuevaCancion(data);
        })


    },[]);


    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Mi Busqueda de Canciones</h5>
                <h6 className="card-subtitle mb-2 text-muted">Canciones</h6>
                {
                    Object.keys(tasks)
                    .map((id) => <Task
                    gT={getTasks}
                    key={id}
                    artist={tasks[id].artist} 
                    ranking={tasks[id].ranking}
                    done={tasks[id].isDone}
                    q_lyrics={tasks[id].q_lyrics}
                    songtittle={tasks[id].songtittle}
                    id={id}
                    />)
                }
            </div>
            {/*<a href></a> */}
            <Link to="/create">Buscar Cancion.</Link>
        </div>
    );
};




  





export default BusquedaCancion;




