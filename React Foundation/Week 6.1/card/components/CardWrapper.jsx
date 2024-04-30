

export function CardWrapper({children}){
    console.log(children)
return(
    <>
    <div style={{border:"2px solid black",padding:"20px"}}>
    {children}
    </div>
    </>
)
}