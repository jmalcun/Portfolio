import React from 'react'
import pdf from '../assets/docs/JuanMalcunCV.pdf'

export const Pdf = () => {
    
    console.log(pdf)

    return (
        <>
            <div className="pdf">
            <object data={pdf} type="application/pdf" width="100%" height="100%" />
            </div>
        </>
    )
}
