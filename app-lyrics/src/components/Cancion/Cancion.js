import React, {useState} from 'react'

const Cancion = (props) => { // props se usa como un objeto y .para llamar a asu metodo
    //    estado  cambio valor por medio del setter -> const song = ''; (no puede cambiar)
    const [song , setSong ] =  useState('SONG'); //('') valor inicial vacio

    return (
        <div>
            {/* <h4>Nombre: {props.nombre}</h4>
            <p>Album: {props.album}</p>
            <p>Cantante: {props.cantante}</p>

            <p>{song}</p> */}
            {/* comentar  Shift + Alt + A */}
            {/*  cada vez que le de clic en boton Buscar voy a ejecutar una funcion anonima que va a retornan la ejecucion de seSong*/}
            {/* <button onClick={() => setSong('GET SONG') }> Busca </button>  */}

            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="..." className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Nombre: {props.nombre}</h5>
                            <p className="card-text">Album: {props.album}</p>
                            <p className="card-text"><small className="text-muted">Cantante: {props.cantante}</small></p>
                            <button onClick={() => setSong({props.nombre}) } className="btn btn-primary"> Detalle </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cancion;
