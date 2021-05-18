import React, { useEffect } from 'react'
import { AboutMe } from './AboutMe'
import {Facademica} from './Facademica'
import {Aptitudes} from './Aptitudes'
import {Proyects} from './Proyects'
import {Contacto} from './Contacto'


export const HomeScreen = () => {
    
    //ANIMACIONES SCROLL
    useEffect(() => {
        let animado = document.querySelectorAll(".animado") 
        let animado2 = document.querySelectorAll(".animado2")
        let animado3 = document.querySelectorAll(".animado3") 
        let animado4 = document.querySelectorAll(".animado4") 
        let animado5 = document.querySelectorAll(".animado5") 
        let animado6 = document.querySelectorAll(".animado6") 
        let animado7 = document.querySelectorAll(".animado7") 

        let ancho = document.body.clientWidth
       
        const mostrarScroll = () => {
            let scrollTop = document.documentElement.scrollTop;
            if(ancho < 450){
                animado.forEach( elemento => {
                    let alturaAnimado = elemento.offsetTop;
                    if(alturaAnimado - 550 < scrollTop){
                        elemento.style.opacity = 1;
                        elemento.className = "F-academica__card-grid animate__animated animate__fadeInRight animate__slower"
                    }
                })
                animado2.forEach( elemento2 => {
                    let alturaAnimado2 = elemento2.offsetTop;
                    if(alturaAnimado2 - 550 < scrollTop){
                        elemento2.className="apt__description animate__animated animate__fadeInRight animate__slower" 
                    }
                })
                animado3.forEach( elemento3 => {
                    let alturaAnimado3 = elemento3.offsetTop;
                    if(alturaAnimado3 - 550 < scrollTop){
                        elemento3.style.opacity = 1;
                        elemento3.className ="apt-title animate__animated animate__fadeInLeft animate__slower "    
                    }
                })
                animado4.forEach( elemento4 => {
                    let alturaAnimado4 = elemento4.offsetTop;
                    if(alturaAnimado4 - 550 < scrollTop){
                        elemento4.style.opacity = 1;
                        elemento4.className ="apt__icons animate__animated animate__fadeInLeft animate__slower"    
                    } 
                })
                animado5.forEach( elemento5 => {
                    let alturaAnimado5 = elemento5.offsetTop;
                    if(alturaAnimado5 - 600 < scrollTop){
                        elemento5.style.opacity = 1;
                        elemento5.className ="apt-title3 animate__animated animate__fadeInLeft animate__slow"    
                    }
                
                })
                animado6.forEach( elemento6 => {
                    let alturaAnimado6 = elemento6.offsetTop;
                    if(alturaAnimado6 - 550 < scrollTop){
                        elemento6.style.opacity = 1;
                        elemento6.className = "proyects-cards animate__animated animate__fadeInUp animate__slow"
                    }  
                })
                animado7.forEach( elemento7 => {
                    let alturaAnimado7 = elemento7.offsetTop;
                    if(alturaAnimado7 - 550 < scrollTop){
                        elemento7.style.opacity = 1;
                        elemento7.className = "contact animate__animated animate__fadeInRight a   nimate__slower"
                    }
                    
                })


            }else{
                animado.forEach( elemento => {
                    let alturaAnimado = elemento.offsetTop;
                    if(alturaAnimado - 650 < scrollTop){
                        elemento.className = "F-academica__card-grid animate__animated animate__fadeOutRight animate__slow animate__delay-2s"
                        elemento.classList.add("visibiliti-hidden")
                    }
                    if(alturaAnimado - 550 < scrollTop){
                        elemento.style.opacity = 1;
                        elemento.className = "F-academica__card-grid animate__animated animate__fadeInRight a   nimate__slower"
                    }
                    if(alturaAnimado + 300 < scrollTop){
                        elemento.className = "F-academica__card-grid animate__animated animate__fadeOutRight animate__slow"
                
                    }
                })
                animado2.forEach( elemento2 => {
                    let alturaAnimado2 = elemento2.offsetTop;
                    if(alturaAnimado2 - 650 < scrollTop){
                        elemento2.className = "apt__description animate__animated animate__fadeOutRight animate__slow"
                        elemento2.classList.add("visibiliti-hidden")
                    }
                    if(alturaAnimado2 - 550 < scrollTop){
                        elemento2.className="apt__description animate__animated animate__fadeInRight animate__slower" 
                    }
                    if(alturaAnimado2 + 400 < scrollTop){
                        elemento2.className = "apt__description animate__animated animate__fadeOutRight animate__slower"
                        elemento2.classList.add("visibiliti-hidden")
                
                    }
                })
                animado3.forEach( elemento3 => {
                    let alturaAnimado3 = elemento3.offsetTop;
                    if(alturaAnimado3 - 650 < scrollTop){
                        elemento3.className = "visibiliti-hidden"
                    }
                    if(alturaAnimado3 - 550 < scrollTop){
                        elemento3.style.opacity = 1;
                        elemento3.className ="apt-title animate__animated animate__fadeInLeft animate__slow "    
                    }
                    if(alturaAnimado3 + 400 < scrollTop){
                        elemento3.className = "F-academica__card-grid animate__animated animate__fadeOutLeft animate__slower"
                
                    }
                })
                animado4.forEach( elemento4 => {
                    let alturaAnimado4 = elemento4.offsetTop;
                    if(alturaAnimado4 - 650 < scrollTop){
                        elemento4.className = "apt__icons animate__animated animate__fadeOutLeft animate__slow"
                        elemento4.classList.add("visibiliti-hidden")
                    }
                    if(alturaAnimado4 - 550 < scrollTop){
                        elemento4.style.opacity = 1;
                        elemento4.className ="apt__icons animate__animated animate__fadeInLeft animate__slower"    
                    }
                    if(alturaAnimado4 + 300 < scrollTop){
                        elemento4.className = "apt__icons animate__animated animate__fadeOutLeft animate__slow"
                    }
                })
                animado5.forEach( elemento5 => {
                    let alturaAnimado5 = elemento5.offsetTop;
                    if(alturaAnimado5 - 650 < scrollTop){
                        elemento5.className = "apt-title3 animate__animated animate__fadeOutLeft animate__slow"
                        elemento5.classList.add("visibiliti-hidden")
                    }
                    if(alturaAnimado5 - 600 < scrollTop){
                        elemento5.style.opacity = 1;
                        elemento5.className ="apt-title3 animate__animated animate__fadeInLeft animate__slow"    
                    }
                if(alturaAnimado5 + 1400 < scrollTop){
                        elemento5.className = "apt-title3 animate__animated animate__fadeOutLeft animate__slow"
                    }
                })
                animado6.forEach( elemento6 => {
                    let alturaAnimado6 = elemento6.offsetTop;
                    if(alturaAnimado6 - 650 < scrollTop){
                        elemento6.className = "proyects-cards animate__animated animate__fadeOutRight animate__slow animate__delay-2s"
                        elemento6.classList.add("visibiliti-hidden")
                    }
                    if(alturaAnimado6 - 550 < scrollTop){
                        elemento6.style.opacity = 1;
                        elemento6.className = "proyects-cards animate__animated animate__fadeInUp animate__slow"
                    }
                })
                animado7.forEach( elemento7 => {
                    let alturaAnimado7 = elemento7.offsetTop;
                    if(alturaAnimado7 - 650 < scrollTop){
                        elemento7.className = "contact animate__animated animate__fadeOutRight animate__slow animate__delay-2s"
                        elemento7.classList.add("visibiliti-hidden")
                    }
                    if(alturaAnimado7 - 550 < scrollTop){
                        elemento7.style.opacity = 1;
                        elemento7.className = "contact animate__animated animate__fadeInRight a   nimate__slower"
                    }
                    if(alturaAnimado7 + 300 < scrollTop){
                        elemento7.className = "contact animate__animated animate__fadeOutRight animate__slow"
                
                    }
                })
            }
        }
        window.addEventListener('scroll', mostrarScroll)
        return () => {
            window.addEventListener('scroll', mostrarScroll)
        }
    }, [])
    
    return (
        <>
            
            <div className="container">
                <AboutMe />
                <Facademica />
                <Aptitudes />
                <Proyects />
                <Contacto />
            </div>
        </>
    )
}



