import React from 'react'

export const Wheather = ({temperature}) => {
 if(temperature<15){
    return <p> Temperature is cold outside</p>
 }
 else if(temperature>=15 && temperature<=25){
    return <p>Good Whether</p>
 }
 else{
    return <p>Its Hot outside</p>
 }

}

export default Wheather;
