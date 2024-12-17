import { useState, useEffect } from "react";
import { getGifs } from "../helper/getGifs";

export const useFetchGifs = (category) => {


  const [images, setImages] = useState([]);
const [isLoading, setIsLoading] = useState(true)


  const getImages = async () => {
    const newImage = await getGifs({ category });
    setImages(newImage);
    // console.log("Resultados de getGifs:", newImage); // Log para verificar los resultados
    setIsLoading(false)
  };

  useEffect(() => {
    getImages();
  }, [category]);




    return{
images, 
isLoading


    }
}


// const [images, setImages] = useState([]);
// const [isLoading, setIsLoading] = useState(true)


//   const getImages = async () => {
//     const newImage = await getGifs({ category });
//     setImages(newImage);
//     // console.log("Resultados de getGifs:", newImage); // Log para verificar los resultados
//     setIsLoading(false)
//   };

//   useEffect(() => {
//     getImages();
//   }, [category]);
