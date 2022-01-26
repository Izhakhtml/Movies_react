import React,{useState,useEffect}from "react";
const View=()=>{
const [UserName,setUserName]=useState("")
useEffect(()=>{
let Name = prompt("Enter your name please");
setUserName(Name)
alert("Wellcome Sir"+" "+Name)
},[])

const [Counter,setCounter]=useState(0)
useEffect(()=>{
console.log(Counter);
},[Counter])


return(
    <div>
         <h1>View : {Counter}</h1>
         <h1>User Name: {UserName}</h1>
         <button onClick={()=>{setCounter(Counter+1)}}>Up</button>
         <button onClick={()=>{setCounter(Counter-1)}}>Down</button>
         <button onClick={()=>{setCounter(0)}}>Reset</button>
    </div>
)
}
export default View;