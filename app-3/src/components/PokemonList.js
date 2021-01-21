import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function PokemonList(props){
const [list, setList] = useState([])

useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon').then(res=>{setList(res.data.results)})
},[])

return(
    <div> {  
        list.map((e)=>{
            return(
                <Link key={e.url} to={`/pokemon/${e.name}`}>
                    <h2>{e.name}</h2>
                </Link>
            )
        })
        }
    </div>
)

}

export default PokemonList