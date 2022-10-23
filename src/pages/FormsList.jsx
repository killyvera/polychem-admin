import React from 'react'
import { Link } from 'react-router-dom'

export const FormsList = () => {
    const form = [
        {
            title: 'Formulario 1',
            questions: 4,
            time: '12:30-14:30',
            days: 'Lun Mar Jue',
            depto: 'Produccion'
        },
    ]

    return (
        <div>
            {form.map((form, index)=>{
                <div key={index} >
                    <h5>
                        {form.title}
                    </h5>
                    
                </div>
            })}
        </div>
    )
}
