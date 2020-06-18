import React, {useState} from 'react'

const FiltroCancion = (props) => { // props se usa como un objeto y .para llamar a asu metodo
    //    estado  cambio valor por medio del setter -> const song = ''; (no puede cambiar)
    const [song , setSong ] =  useState('SONG'); //('') valor inicial vacio

    return (
        <div>
            <h4>Nombre: {props.nombre}</h4>
            <p>Album: {props.album}</p>
            <p>Cantante: {props.cantante}</p>
            <p>Rating: {props.rating}</p>
            <p>Letra: {props.letra} </p>

            <p>{song}</p>
            {/* comentar  Shift + Alt + A */}
            {/*  cada vez que le de clic en boton Buscar voy a ejecutar una funcion anonima que va a retornan la ejecucion de seSong*/}
            <button onClick={() => setSong('GET SONG') }> Buscar </button>
        </div>
    )
}

export default FiltroCancion;
