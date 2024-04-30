import { useState } from "react";
import { Header } from "./Header";
export function HeaderwithButton(){
    const [title, setTitle] = useState('Rudra')

  function UpdateTitle(){
    setTitle(Math.random());
  }
  return(
    <>
    <button onClick={UpdateTitle}>Click to change the title</button>
    <Header title={'Hello'}/>
      <Header title={title}/>
      </>
  )
  }