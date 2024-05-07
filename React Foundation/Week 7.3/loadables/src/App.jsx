
import './App.css'
import { RecoilRoot, useRecoilStateLoadable,useRecoilValueLoadable,useRecoilValue } from 'recoil';
import { todosAtomFamily } from './atoms';
import { Suspense } from 'react';

function App() {
  return <RecoilRoot>
    <Suspense fallback={"loading..."}>
    <Todo id={1}/>
    <Todo id={2} />
    </Suspense>
  </RecoilRoot>
}

function Todo({id}) {
  //Suspense api,Error Boundary
  //  const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
  const todo= useRecoilValueLoadable(todosAtomFamily(id));
   if (todo.state === "loading") {
      return <div>loading</div>
   }
   else if(todo.state=="hasError"){
    alert("Some backend call failed");
   return(
    <>
    <div>Backend Call Failed</div>
    </>
   )
   }
   return (
    <>
      {todo.contents.title}
      {todo.contents.description}
      <br />
    </>
  )
}

export default App
