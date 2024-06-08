import revalidate from '../lib/action1';

export default async function Home() {
    
const res = await fetch('https://sum-server.100xdevs.com/todos', { next: { tags: ['todos'] } })

    const data = await res.json();
    revalidate()

    return(
     <div>
        {data.todos.map((todo: any) => <div key={todo.id}>
            {todo.title}
            {todo.description}
        </div>)}
    </div>
    )   
}