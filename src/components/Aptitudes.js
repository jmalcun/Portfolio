import React from 'react'
import fondo from '../assets/aptitudesImg.jpg'

export const Aptitudes = () => {


    return (
        <>
            <div className="aptitudes ">
                <div className="apt__titleDiv">
                    <div className="aptitudes-div-title">
                        <div className="raya"></div>
                        <h1 className="apt-title2">Aptitudes</h1>
                    </div>
                </div>
                <div className="apt__cards">
                    <div className="apt__icons animado4">
                        <i className="fab fa-html5 html" />
                        <i className="fab fa-css3-alt css"/>
                        <i className="fab fa-js js" />
                        <i className="fab fa-react react" />
                    </div>
                    <div className=" apt__description animado2">
                        <div>
                            <h2>HTML</h2>
                            <p>HTML semantic - ARIA - tags</p>
                        </div>
                        <div>
                            <h2>CSS</h2>
                            <p>Box model - Specificity - Responsive - Flexbox - SVG - Keyframes - transitions - BEM</p>
                        </div>
                        <div>
                            <h2>JavaScript</h2>
                            <p>Data - Function - Arrow Function - IIFE - First class citizen - async/await - callbacks - Promises - Fetch Api - ES6 - Class - OOP - DOM Manipulation - Event Loop - Funtional Programing </p>
                        </div>
                        <div>
                            <h2>React</h2>
                            <p>JSX - Hooks - Routes - Components - Custom Hooks - Redux</p>
                        </div>
                    </div>
                </div>
            </div>       
        </>
    )
}

/* <div className="apt__card animate__animated animate__fadeIn">
                        <div className="apt__card-title">
                            <h2><i className="fab fa-html5 html"></i>HTML</h2>
                        </div>
                        <div className="apt__card-description">
                            <p>HTML semantic - ARIA - tags</p>
                        </div>
                    </div>
                    <div className="apt__card animate__animated animate__fadeIn animate__delay-1s">
                        <div className="apt__card-title">
                            <h2><i className="fab fa-css3-alt css"></i>CSS</h2>
                        </div>
                        <div className="apt__card-description">
                            <p>Box model - Specificity - Responsive - Flexbox - SVG - Keyframes - transitions - BEM</p>
                        </div>
                    </div>
                    <div className="apt__card animate__animated animate__fadeIn animate__delay-2s">
                        <div className="apt__card-title">
                            <h2><i className="fab fa-js js"></i>JavaScript</h2>
                        </div>
                        <div className="apt__card-description">
                            <p>Data - Function - Arrow Function - IIFE - First class citizen - async/await - callbacks - Promises - Fetch Api - ES6 - Class - OOP - DOM Manipulation - Event Loop - Funtional Programing </p>
                        </div>
                    </div>
                    <div className="apt__card animate__animated animate__fadeIn animate__delay-3s">
                        <div className="apt__card-title">
                            <h2><i className="fab fa-react react"></i>React</h2>
                        </div>
                        <div className="apt__card-description">
                            <p>JSX - Hooks - Routes - Components - Custom Hooks - Redux</p>
                        </div>
                    </div>*/