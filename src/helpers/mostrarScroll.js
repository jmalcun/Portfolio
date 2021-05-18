export const mostrarScroll = (alturaAnimado, scrollTop) => {
    if(alturaAnimado - 650 < scrollTop){
        return elemento.className = "F-academica__card-grid animate__animated animate__fadeOutRight animate__slow animate__delay-2s"
        elemento.classList.add("visibiliti-hidden")
    }
    if(alturaAnimado - 550 < scrollTop){
        elemento.style.opacity = 1;
        return elemento.className = "F-academica__card-grid animate__animated animate__fadeInRight a   nimate__slower"
    }
    if(alturaAnimado + 300 < scrollTop){
        return elemento.className = "F-academica__card-grid animate__animated animate__fadeOutRight animate__slow"

    }
}