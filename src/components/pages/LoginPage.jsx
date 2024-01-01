import React from 'react'
import { useState } from 'react'


export default function LoginPage() {
  //State
   const [InputValue, setInputValue] = useState("")


  //comportement
  const  handleSubmit = (event) => {
    event.preventDefault()
    alert("Bonjour " + InputValue)
   }

   const handleChange = (event) => { 
    setInputValue(event.target.value)
    }


  //Affichage
  
  
  return (
    <div>
      <h1>Bienvenue chez nous</h1>
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input value={InputValue} onChange={handleChange} type="text" placeholder='Entrer votre prenom...' required/>
        <button>Acceder a votre espace</button>
      </form>
    </div>
  )
}

