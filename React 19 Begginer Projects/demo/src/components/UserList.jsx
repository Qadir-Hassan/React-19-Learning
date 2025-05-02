
import React from "react";

export const UserList = () =>{

    const users = [

        {id:1, name: "Qadir", age: 25},
        {id : 2, name: "Hassan", age: 26},
        {id:3, name: "ALi", age: 30},
    ];
    return (

        <div>

          {users.map(({id,name,age})=>(
            <ul key = {id}>
                <li>{name}</li>
                <li>{age}</li>
            </ul>
          ))}
        </div>

  
    )
}

export default UserList;

