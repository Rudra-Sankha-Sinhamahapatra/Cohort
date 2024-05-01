import { useEffect } from "react"

export function Todo({title,description}){
    useEffect(()=>{
        return()=>{
        alert("unmount");
    }},[])
return(
    <>
    <div>
        <h1>{title}</h1>
        <h4>{description}</h4>
    </div>
    </>
)
}