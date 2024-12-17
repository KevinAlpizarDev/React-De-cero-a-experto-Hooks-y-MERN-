import { useEffect, useState } from "react";
import { getGifs } from "../helper/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
export const GiftGrid = ({ category }) => {

const {images, isLoading } =  useFetchGifs(category)
console.log({isLoading} );

//   const [images, setImages] = useState([]);
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

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
   

{images.map((image)=> {
  return (
    <GifItem 
  
key={image.id}

    {...image}
 
    
    
    />
  )
})}

      </div>
    </>
  );
};