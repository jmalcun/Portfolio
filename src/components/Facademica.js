import React from 'react'
import { dataAcademica } from '../dataAcademica/dataAcademica'
import { CardAcademica } from './CardAcademica'


export const Facademica = () => {

    

    return (
        <>
            <div className="F-academica ">
                <div className="F-academica__title" >
                    <h1 className="animado3 apt-title" id="formacion">Formacion Academica</h1>
                </div>
                
                <div className="animado F-academica__card-grid " >
                    {
                        dataAcademica.map( estudio => (
                            <CardAcademica key={estudio.id} {...estudio} />
                        ))
                    }
                </div>
            </div>
            

        </>
    )
}
