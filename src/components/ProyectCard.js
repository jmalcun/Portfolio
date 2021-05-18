import React from 'react'
import Swal from 'sweetalert2'

export const ProyectCard = ({ name,  description, urlPage, urlGit, imageP}) => {

    const handleClick = () => {
        Swal.fire({
            title: name,
            text: description,
            icon:'info',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
        })        
    }

    return (
        <>
            <div className="proyect__card ">
                <div className="proyect__card-img">
                    <img src={imageP} />
                </div>
                <div className="proyect__interaccion-u">
                    <div className="proyect__card-title">
                        <h2>{name}</h2>
                    </div>
                    <div className="proyect__card-buttons">
                        <button className="proyect__details" onClick={handleClick}>
                            <i className="fas fa-info-circle"></i>Details
                        </button>
                        <a href={urlPage} target="_blank">
                            <button className="proyect__go-page">
                                <i className="fas fa-sign-in-alt"></i>{name}
                            </button>
                        </a>
                    </div>
                </div>
               
                        
            </div> 
        </>
    )
}

