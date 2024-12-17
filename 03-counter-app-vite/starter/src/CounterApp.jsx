// # Tarea

// 1. Crear un nuevo componente dentro de la carpeta SRC llamado
//     ```CounterApp```

// 2. El CounterApp debe de ser un __Functional Component__

// 3. El contenido del __CounterApp__ debe de ser:
//     ```
//         <h1>CounterApp</h1>
//         <h2> { value } </h2>
//     ```

// 4. Donde ```"value"``` es una propiedad enviada desde el padre hacia
//     el componente __CounterApp__ __(Debe ser númerica validada con PropTypes)__

// 5. Reemplazar en el index.js ó main.jsx el componente de ```<PrimeraApp />```
//     por el componente ```<CounterApp />```
//         (no se olviden del value que debe de ser un número)

// 6. Asegúrense de no tener errores ni warnings
//     (Cualquier warning no usado, comentar el código)

// import PropTypes from 'prop-types'
// import React from 'react'




// export const CounterApp = ({value}) => {

// const handleAdd = () => {
// value = 1000
// console.log(value);


// }



//   return (
// <>
//          <h1>CounterApp</h1>
//         <h2> { value } </h2>
//         <button onClick={ (event) => handleAdd(event)}  type="button" className="text-white bg-blue-600 hover:bg-blue-800   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800">+1</button>

// </>
//   )
// }
// CounterApp.propTypes = {

//     value: PropTypes.number
  
    
    
//     }
    

//////////////////////////////////useState


import { useState } from 'react'
import PropTypes from 'prop-types'





export const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value)


const handleAdd = () => setCounter((c) => c + 1)

// const handleSubtract = () => setCounter((c) => c > 1 ? c - 1 : value)
const handleSubtract = () => setCounter((c) => c > 1 ? c - 1 : value)

const handleReset = () => setCounter(value)

  return (
<> 
         <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button onClick={ handleAdd }  type="button" className="text-white ml-2 bg-blue-600 hover:bg-blue-800   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800">+1</button>
        <button onClick={ handleSubtract } type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800  focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">-1</button>
        <button onClick={ handleReset } type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10  focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Reset</button>
</>
  )
}


CounterApp.propTypes = {
    value: PropTypes.number
    }
    