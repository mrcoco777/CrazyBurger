import React, { useState } from 'react'
import LoginForm from '../login/LoginForm'

export default function OrderPage() {
  
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
 
  
    return (
    <form action="submit" onSubmit={handleSubmit}>
    <h1>Bienvenue chez nous !</h1>
    <h2>Connectez-vous</h2>
      <input 
        value={InputValue} 
        onChange={handleChange} 
        type="text" 
        placeholder='Entrer votre prenom...' 
        required
        />
      <button onClick={LoginForm}>Deconnexion</button>
    </form>

  )
}
