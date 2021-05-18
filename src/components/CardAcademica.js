import React from 'react'

export const CardAcademica = ({name, description, imagen}) => {


    return (
        <>
           <div className="f-academica__card">
                    <div className="f-academica__card-img">
                        <img src={imagen} alt="img"/>
                    </div>
                    <div className="f-academica__card-title">
                        <h4 className="f-academica__name">{name}</h4>
                        <p className="f-academica__description">{description}</p>
                    </div>
            </div>  
        </>
    )
}
