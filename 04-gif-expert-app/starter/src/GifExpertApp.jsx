import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["cr7"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory,...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GiftGrid
         key={category}
          category={category}
           />
      ))}

      {/* <button onClick={onAddCategory}>Agregar</button> */}
    </>
  );
};
