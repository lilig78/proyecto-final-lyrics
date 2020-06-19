import React from 'react'

const InfoCancion = (props) => {
    return (
        <div  className="col-4">
            <div  className="card">
                <img src={props.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <a href="{props.url}" className="btn btn-primary">Ver detalle</a>
                </div>
            </div>
        </div>
    )
}

export default InfoCancion;
