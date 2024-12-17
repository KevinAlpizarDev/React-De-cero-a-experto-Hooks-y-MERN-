import React, { useState, useEffect } from 'react'
import {useForm} from "../hooks/useForm"
import { Message } from './Message'



export const FormWithCustomHook = () => {
   


  const {formState, onInputChange, onResetForm, username, email, password} = useForm({

    username: "",
    email: "",
    password: ""
    }
    )




// const {username, email, password} = formState

  return (
<>
<br />

<h1>Form With Custom Hook </h1>
<br />

<input

 type="text"

placeholder='Username'
name="username"
value={username}
onChange={onInputChange}







/>



<br />
{/* <p>
    {username}
</p> */}
<input
 type="text"
className=''
placeholder='kevinalpizardev@gmail.com'
name="email"
value={email}
onChange={onInputChange}



/>


<input

 type="text"

placeholder='Password'
name="password"
value={password}
onChange={onInputChange}







/>

{/* 
<p>{email}</p> */}



<button
  className="px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600 focus:outline-none  focus:ring-red-400 focus:ring-offset-2 transition-all duration-300"
  onClick={onResetForm}
>
  Borrar
</button>

  {
    username === "Kevin2" && <Message/>
  }
  

</>

  )
}

