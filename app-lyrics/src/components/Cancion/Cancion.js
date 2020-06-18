import React, {useState} from 'react'

const FiltroCancion = (props) => { // props se usa como un objeto y .para llamar a asu metodo
    //    estado  cambio valor por medio del setter -> const song = ''; (no puede cambiar)
    const [song , setSong ] =  useState('SONG'); //('') valor inicial vacio

    return (
        <div>
            <h1>Nombre: {props.nombre}</h1>
            <h3>Album: {props.album}</h3>
            <h3>Cantante: {props.cantante}</h3>

            <p>{song}</p>
            {/* comentar  Shift + Alt + A */}
            {/*  cada vez que le de clic en boton Buscar voy a ejecutar una funcion anonima que va a retornan la ejecucion de seSong*/}
            <button onClick={() => setSong('GET SONG') }> Busca </button>
        </div>
    )
}

export default FiltroCancion;
