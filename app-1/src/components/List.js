import Todo from './Todo'

function List(props){
console.log(props.list)
    return(
        <div>
            {props.list.map((item, i)=>{
                return <Todo key={i} item={item}/>
            })}
        </div>
    )
}

export default List