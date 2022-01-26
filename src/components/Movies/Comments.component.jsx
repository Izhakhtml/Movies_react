import React from "react";
import MyView from "./Views.component";
import { ContextProvider } from "./ContextProvider.component";
const Comments=()=>{
return(  
<ContextProvider>
    <MyView/>    
</ContextProvider>
)
}
export default Comments;