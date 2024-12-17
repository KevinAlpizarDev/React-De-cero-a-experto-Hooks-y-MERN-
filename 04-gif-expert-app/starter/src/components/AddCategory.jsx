import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

const onInputChange = ({target}) => {
// console.log(event.target.value);

    // setInputValue("Hola mundo ")
// console.log(target.value);

setInputValue(target.value)
}


const onSubmit = (event) => {
event.preventDefault()//event.preventDefault(): Este método detiene el comportamiento predeterminado del evento del navegador. En el caso de un formulario, previene que la página se recargue cuando se envía el formulario.

// if (inputValue.trim().length <= 1) return
if (inputValue.trim().length <= 1) return
// setCategories( categories => [...categories, inputValue])
onNewCategory(inputValue.trim())
setInputValue("")
}


  return (
  <form onSubmit={ (onSubmit)}>
 <input
        type="text"
        placeholder="Buscar gifts..."
        value={inputValue}
        // onChange={handleInputChange} // Añade el manejador para el evento onChange

     onChange={ onInputChange}

     />

  </form>
  );
};
