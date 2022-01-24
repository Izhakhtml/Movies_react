import React from "react";
import { CustomInput } from "./Custom-input.component";
export const AddMovie=()=>{
const ArrayMovies=
[
    {title:"Movie Name",name:"MovieName",type:"text"},
    {title:"Rating",name:"Rating",type:"number"},
    {title:"Image",name:"Image",type:"text"},
    {title:"Year Published",name:"YearPublished",type:"date"}
]
return(
    <div>
         <h1>ADD MOVIE FORM:</h1>
         {
             ArrayMovies.map((item)=>(
             <CustomInput Title={item.title}InputType={item.type}InputName={item.name}/>    
             ))
         }
    </div>
)    
}