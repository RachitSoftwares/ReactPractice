import {useState} from 'react'
const ColorChange=()=>{
 const[color,setColor]=useState("")
 const changeColor=(colorName)=>{
   setColor(colorName)
 }
    return(
<>
<p style={{color:color}}>Hello</p>
<p>Ashwini</p>
<button onClick={()=>changeColor("yellow")}> Yellow</button>
<input type="button" value="Blue" onClick={()=>changeColor("blue")}/>
</>
    )
}
export default ColorChange;