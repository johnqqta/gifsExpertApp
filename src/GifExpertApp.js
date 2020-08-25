import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {
    //establece el stado incial del componente y la funcion para 
    //modificar el estado
    const [categories, setCategories] = useState(['One Punch']);
    //retorne esto
    return (
        // un fragment 
        <> 
        {/* imprime en un h2 esto */}
            <h2>GifExpertApp</h2>
            {/* llame a este componente y se le envia la funcion con la que se altera
            las categorias */}
            <AddCategory setCategories = {setCategories} />
            <hr/>
            <ol>
                {/* llama al componente por cada categoria que hay enviuando en los 
                props la categoria y como key del componente pone la categoria */}
                {
                    categories.map((category) => {
                       return <GifGrid category = {category}
                                key = {category}
                                />
                    })
                }
            </ol>
        </>
    );
};

export default GifExpertApp;