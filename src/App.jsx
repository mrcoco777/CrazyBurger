import { useState } from "react"

function App(){
  //state 
  const [prenom, setPrenom] = useState("Antoine")
// je definis un state, j'initialiste VI, que je recu variate prenom
//et je peux que modif avec setPrenom
  const [count, setCount] = useState(1)
  //why not use let, because useState provote une reactualisation auto
  //comportement
  const handleClick =  () => {

    setCount(count + 1)

  }
  //affichage (render = rendre via return 
  //JSX= ecrice html dans JS)
  //Modifier le state sans utiliser son setter dédié modifie la valeur du state 
  return (
    <div>
    <h1>Bienvenue chez nous !</h1>
    <p>Connectez-vous</p>
    <form>
       <input type="text" placeholder="Entre votre prenom" required></input>
       <button onClick={handleClick}>Acceder a votre espace</button>
       </form>
    <p>{count}</p>
    
  </div>
  )
}


export default App