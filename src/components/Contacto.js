import React from 'react'
import { NavLink } from 'react-router-dom'

export const Contacto = () => {
    return (
        <>
        <div className="contacto">
            <div className="contacto-title-h1">
                <h1 className="apt-title">Contacto</h1>
            </div>
            <div className="contact animado7">
                <div className="iconos">
                    <i className="fab fa-linkedin in"></i>
                    <i className="fas fa-envelope-open-text"></i>
                    <i className="fas fa-file-pdf"></i>
                    <i className="fas fa-map-pin"></i>
                </div>
                <div className="contact-description">
                    <a href="https://www.linkedin.com/in/juan-manuel-malcun/" target="_blank"><p>Juan Manuel Malcun</p></a>
                        <p>jmalcun@gmail.com</p>
                        <NavLink to="/pdf"><p>Curriculum Vitae</p></NavLink>
                        
                        <p>La Plata, Buenos Aires</p>
                </div>         
            </div>
        </div>
        </>
    )
}
