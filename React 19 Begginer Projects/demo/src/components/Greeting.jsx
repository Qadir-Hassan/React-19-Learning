import React from "react";
export const Greeintg = ()=>{
    const message = "Welcome to our Message"
    const name = "john"
    const date = Date()
    return (

        <div>
            <h1>{message}</h1>
            <p>{Date.now}</p>

            <p>My name is : {name}</p>
            <p>Todat Date is : {date}</p>


        </div>
    )
}

export default Greeintg;