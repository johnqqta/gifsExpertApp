import React from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

const GifGrid = ({category}) => {
    /**
     * desectructura el objeto que viene del state del customHook useFetchGifs el cual 
     * devuelve una data, y un flag de loading. la data la renombra como images
     */
    const {data:images,loading} = useFetchGifs(category);
   
    return (
        <>
            <h3>{category}</h3> 
            {(loading) && <p className='animate__animated animate__flash'>Cargando....</p>}
            <div className="card-grid">
                {/* imprime la categoria */}

                    {
                    //rederiza un componente de estos por cada imagen que halla en la coleccion
                    //obtenida por la peticion fetch a giphy
                        images.map((img)=>(
                                            
                            <GifGridItem
                                key = {img.id}
                    //enviamos un objeto de todas las propiedades contenidas en img a los props del componente hijo
                                {...img} 
                            />
                        ))
                    } 
            </div> 
        </>
    )
}

GifGrid.propTypes = {
    category : PropTypes.string.isRequired,
}

export default GifGrid
