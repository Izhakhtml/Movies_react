import React from "react";
export const CustomInput=(props)=>{
const{Title,InputName,InputType}=props
return(
    <div>
         <label>{Title}</label><br />
         <input type={InputType} name={InputName} />
    </div>
)    
}