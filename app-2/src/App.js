import './App.css';
import {useState, useEffect} from 'react'
import ListItem from './components/ListItem'
import axios from 'axios'

function App() {
const [list, setList] = useState([])

useEffect(()=> {
  axios.get('https://pokeapi.co/api/v2/pokemon')
  .then(res=> {
    setList(res.data.results)
  })
}, [])
  return (
    <div className="App">
      {list.map((e,i)=> {
          return <ListItem key={i} name={e.name}/>
      })}
    </div>
  );
}

export default App;
