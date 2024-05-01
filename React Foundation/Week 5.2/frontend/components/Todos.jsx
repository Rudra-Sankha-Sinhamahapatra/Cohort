/*
todos=[
    {
        title:"Go to Gym",
        description:"You need to go to the gymS"
    }
]
*/

export function Todos({todos},{index}){
    return(
        <>
        <div key={index}>
         {todos.map(function(todo,id){
            return(
                <> 
                <div key={id}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed==true?"Completed":"Mark as Complete"}</button>
                </div>
                </>
            )
         })}
            
            </div>       
        </>
    )
}