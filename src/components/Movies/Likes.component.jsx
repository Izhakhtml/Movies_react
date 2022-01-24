import React,{useState} from "react";
export const Likes =()=>{
let [Counter,setCounter] = useState(0);
const UpCounter=()=>{
return Counter+1;
}
const DownCounter =()=>{
return Counter-1;
}
const ReserCounter =()=>{
return Counter=0;
}
return(
    <div>
        <p>{Counter}</p>
        <button onClick={()=>{setCounter(UpCounter)}}>Add LIke</button>
        <button onClick={()=>{setCounter(DownCounter)}}>Reduce Like</button>
        <button onClick={()=>{setCounter(ReserCounter)}}>Reset Like</button>
    </div>
)    
}