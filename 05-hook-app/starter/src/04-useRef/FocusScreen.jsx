import {useRef} from "react"


export const FocusScreen= () => {

const inputRef = useRef()



const onClick = (e) => {

// document.querySelector("input").select()
e.preventDefault();
// console.log(inputRef);
inputRef.current.focus()
}


  return (
<>
<h1>Focus Screen</h1>
<br /> 


<form className="max-w-sm mx-auto">
  <div className="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input 
    ref={inputRef}
  type="text"
  className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
  placeholder="Ingrese su nombre"
/>


  </div>
  <button 
  type="submit" 
  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  onClick={ onClick}
  >Set Focus</button>
</form>

</>
  )
}


