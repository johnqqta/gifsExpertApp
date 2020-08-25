 //funcion que hace peticion fetch tipo get a la api de giphy y es convertida en promesa
    //por el uso del async
    export const getGifs = async(category) => {
        const apiKey = 'OuwmR5EG9B1vMrSEfRufDT8ERXlq3PA1';//apikey mia
        //endpoint completo
        const endPoint = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&lang=es&limit=10&api_key=${apiKey}`;
        //haga peticion get a la url esa y espere hasta que obtenga respuesta
        const resp = await fetch(endPoint);
        //extraiga la data en formato json y siga hasta que termine este proceso a la siguiente linea
        const {data} = await resp.json();
        // retorne un objeto con estas propiedades por cada image
        const gifs = data.map((img)=>{
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            };
        });
        //establezca el nuevo valor de imagenes usando la funcion del hook useState con el nuevo
        // objeto el cual es envuelto en el array vacio por defecto del images 
        return gifs;
    };