import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    /**
     * desestructura lo que devuleve el useState que es el state y una funcion para
     * cambiar el state. el estado inicial del component es lo que esta dentro
     * de useState
     */

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    /**
     * Este useEffect indica que voy a ejecutar lo que esta dentro del callback
     * solo al momento de renderizar el componente una unica vez y solo al cambiar 
     * la categoria vuelve y ejecuta la funcion. si hay otro cambio en este componente
     * lo que esta por dentro del callback no se ejecuta
     */
    useEffect(() => {
        /**
         * Hace la peticion get y espera el los gifs d la peticion si todo sale bien
         * si algo sale mal ya se sabe que es con un cath ya que esto es una promesa
         */
        getGifs(category).then((gifs) => {
            setState({
                data: gifs,
                loading: false,
            });
        });
    }, [category]); //solo vuelve a ejecutar si la categoria cambia si no no hace nada
    //retorna el estado
    return state;
}
