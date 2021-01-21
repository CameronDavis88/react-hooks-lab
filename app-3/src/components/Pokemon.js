import {useState, useEffect} from 'react'
import axios from 'axios'


function Pokemon(props){
const [pokemon, setPokemon] = useState({})
const {name} = props.match.params

useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(res=>
        {setPokemon(res.data)}
        )
},[name])

return(
    <div>
        <h2>
            {pokemon.name}
        </h2>
        <img src={pokemon.sprites?.front_default} alt={pokemon.name}/>
    </div>
)

}




 export default Pokemon