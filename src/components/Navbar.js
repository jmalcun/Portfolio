import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

    const [mostrarMenu, setMostrarMenu] = useState(false)

    const handleClick = () =>{
        setMostrarMenu(!mostrarMenu)
    }


    return (
        <>
            <nav className="navbar">
                <div className="navbar__home-link">
                <NavLink
                    activeClassName="active"
                    className="navbar__jm"
                    exact to="/">Jm
                </NavLink>
                </div>
                
                <div className="navbar__navbar-links"> 
                        <i onClick={handleClick} className={(mostrarMenu) ?"fas fa-times menuResponsive"  :"fas fa-bars menuResponsive"}></i>
                        <ul className={(mostrarMenu) ?"navbar__ul__responsive" :"navbar__ul"}>
                            <li>
                                <NavLink
                                    onClick={() => setMostrarMenu(!setMostrarMenu)} 
                                    activeClassName="active"
                                    className="navbar__link"
                                    exact to="/Formacion-academica">Formacion Academica
                                    
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    onClick={() => setMostrarMenu(!setMostrarMenu)} 
                                    activeClassName="active"
                                    className="navbar__link"
                                    exact to="/Aptitudes">Aptitudes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    onClick={() => setMostrarMenu(!setMostrarMenu)} 
                                    activeClassName="active"
                                    className="navbar__link"
                                    exact to="/Proyectos">Proyectos
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    onClick={() => setMostrarMenu(!setMostrarMenu)} 
                                    activeClassName="active"
                                    className="navbar__link"
                                    exact to="/Contacto">Contacto
                                </NavLink>
                            </li>
                        </ul>
                </div>  
            </nav>
            
        </>
    )
}

