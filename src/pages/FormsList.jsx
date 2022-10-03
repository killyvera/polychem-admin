import React from 'react'

export const FormsList = () => {
    const forms = [
        {
            title: 'Formulario 1',
            questions: 4,
            time: '12:30-14:30',
            days: 'Lun Mar Jue',
            depto: 'Produccion'
        },
        {
            title: 'Formulario 2',
            questions: 12,
            time: '12:30-14:30',
            days: 'Lun Mar Jue',
            depto: 'Produccion'
        },
        {
            title: 'Formulario 3',
            questions: 7,
            time: '12:30-14:30',
            days: 'Lun Mar Jue',
            depto: 'Produccion'
        },
        {
            title: 'Formulario 4',
            questions: 20,
            time: '12:30-14:30',
            days: 'Lun Mar Jue',
            depto: 'Produccion'
        },
    ]

    return (
        <div>
            {forms.map((form, index)=>{
                <div>
                    <h5>
                        {form.title}
                    </h5>
                    
                </div>
            })}
        </div>
    )
}
