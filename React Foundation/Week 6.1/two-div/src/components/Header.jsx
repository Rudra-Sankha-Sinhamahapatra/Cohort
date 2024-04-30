import React from 'react'

//React.memo is another method to minimize component rerendering
//but we can still do it without React.memo because it is in the different component folder
//and in the headerbutton jsx file the button is in so we have done it
//a component re renders with button 

export const Header=React.memo(function Header({title}){
    return(
        <div>
            <h1>{title}</h1>
        </div>
    )
}
)