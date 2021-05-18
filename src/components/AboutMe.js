import React from 'react'
import fondo from '../assets/fondo6.jpg'
import flecha from '../assets/down-chevron.svg'

export const AboutMe = () => {

    


    return (
        <>  
          <div className="aboutme__box">
                <img className="aboutme__img" src={fondo} alt="img"/>
                <div className="aboutme__contenido">
                    <h1 className="aboutme__titulo"> Juan Manuel Malcun</h1>
                    <p className="aboutme__front-desc animate__animated animate__backInDown animate__delay-1s" >Front-end developer</p>
                    <div className="aboutme__icons-div">
                        <i className="fab fa-html5 aboutme__html animate__animated animate__bounceInRight animate__delay-2s"></i>
                        <i className="fab fa-css3-alt aboutme__css animate__animated animate__bounceInRight animate__delay-3s"></i>
                        <i className="fab fa-js aboutme__js animate__animated animate__bounceInRight animate__delay-4s"></i>
                        <i className="fab fa-react aboutme__react animate__animated animate__bounceInRight animate__delay-5s"></i>
                    </div>  
                    <div className="aboutme__about-me">
                        <div className="aboutme__img-contain">
                        
                        </div>
                        <div className="aboutme__description-me">
                            <p>Soy Juanma, tengo 29 años, vivo en la ciudad de La Plata, provincia de Buenos Aires. <p/>
                            <p>Mi objetivo es continuar desarrollando mi potencial como <span>desarrollador web Front-end</span> en ambientes dinámicos e innovadores en los cuales se valore la calidad   humana, el compañerismo y la cooperación.-
                            Apasionado por la tecnología.- </p>
                        </p>
                        </div>
                    </div> 
                    <div className="aboutme__flechas">
                        <a href="#formacion"><img className="animate__animated animate__bounce animate__infinite" src={flecha} width="55px" height="55px" /></a>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
