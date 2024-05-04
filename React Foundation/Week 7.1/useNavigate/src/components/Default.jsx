export function Default(){
    return(
        <>
        <button onClick={HandleClick}>Click Me</button>
        </>
    )
}

function HandleClick(){
    alert('Yay!')
}