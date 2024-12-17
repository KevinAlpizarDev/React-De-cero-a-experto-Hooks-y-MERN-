import React, { useState, useEffect } from 'react'
import { Message } from './Message'
export const SimpleForm = () => {


const [formState, setformState] = useState({

username: "Kevin",
email: "kevin@google.com"

})


const {username, email} = formState

const onInputChange = ({target}) => {

const { name, value} = target
console.log({name, value});


setformState({
  ...formState,
  [name] : value
})

// setformState({


//     ...formState,
//      [name]: value
// })

}
// useEffect(() =>{


//   console.log("useEffect called");
  
//   }, [])
  
  
  
  

// useEffect(() =>{


// console.log("form state change");

// }, [formState])





// useEffect(() =>{
//   console.log("email change");
//   }, [email])
  
  
  


//useEffect unmount = cleanup









  return (
<>
<br />

<h1>Simple Form</h1>
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
{/* 
<p>{email}</p> */}

{
  username === "Kevin2" && <Message/>
}

</>

  )
}

