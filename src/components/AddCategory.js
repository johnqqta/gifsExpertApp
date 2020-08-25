import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState(''); //estado por defecto el input

    //funcion que maneja el cambio de la caja de texto
    const handleInputChange = (e) => {
        //coloca como nuevo valor al input text el valor del evento a traves de la funcion
        //para cambiar el stado del inputValue
        setInputValue(e.target.value);
    };
    //funcion que maneja el submit del formulario
    const handleSubmit = (e) => {
        //previene la recarga del navegador
        e.preventDefault(); 
        //toma el valor contenido en la caja de texto y le quita los espacion
        const text = inputValue.trim(); 
        //crea una expresion regular para evaluar
        const PATTERN = /^[a-z-A-Z]([a-z A-Z 0-9]+){3,4}$/;
        //mira si el texto obtenido sigue el patron de la expRegular
        if (PATTERN.test(text)){
            //usa la funcion de establecer el valor de las categorias
            setCategories((categories) => {
                //buscamos si dentro de las categorias ya hay un elemento igual al que 
                //viene por la caja de texto
                const found = categories.find((category) => category === text);
                //si no hay en categorias este valor que nos llego
                if (found === undefined){
                    //limpie el valor de la caja de texto 
                    setInputValue('');
                    //actualize el estado de las categorias colocando lo que nos llego
                    //en el inicio del array de las categorias y retorne                    
                    return [text,...categories]
                //si encontro el texto en las categorias    
                }else{
                    //limpie la caja a traves de la funcion de cambiar el stado 
                    setInputValue('')
                    //returne todas las categorias existentes a traves del spread (...)
                    return [...categories];
                }
            });
        }
    };
    //retorno del componente con algunas funciones de eventos para el
    return (
        // retorna un formulario que dispara un evento al submit
        <form onSubmit = {handleSubmit}>
            {/* detro del submit viene una caja de texto que dispara una funcion al 
            evento change */}
            <input 
                type = "text" 
                className="add-category"
                placeholder = 'Ingrese Su Personaje'
                value = {inputValue}
                onChange = {handleInputChange}
            />
        </form>
    )
}



AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired,
}



