import React, {useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';


// http://api.musixmatch.com/ws/1.1/track.search?q_artist=daddy yankee & q_lyrics =gasolina & apikey=fa9bf33f5d2010c8d6909b728684095b 

const BusquedaCancion = () => {
    const endpoint ='http://api.musixmatch.com/ws/1.1/track.search?';
    const API_KEY = 'fa9bf33f5d2010c8d6909b728684095b'; 


    useEffect(() => {
        console.log('Componente');
    },[]);
};




export default BusquedaCancion;




