import React from 'react'
import { dataProyectos } from '../dataProyects/dataProyects'
import { ProyectCard } from './ProyectCard'

export const Proyects = () => {

  

    
    return (
        <>
            <div className="proyects">
                <h1 className="apt-title3 animado5">Proyectos</h1>
                <div className="proyects-cards animado6">
                    {
                        dataProyectos.map( p => (
                            <ProyectCard key={p.id} {...p} />
                        ))
                    }
                </div>
            </div>
            
        </>
    )
}
