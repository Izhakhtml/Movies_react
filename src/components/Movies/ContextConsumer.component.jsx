import React,{useContext} from "react";
import { MyProvider2 } from "./ContextProvider.component";
const ContextConsumer =()=>{
const HeaderConContext = useContext(MyProvider2);
return(
    <div>
         {
             HeaderConContext.map((item)=>{
               <div>
                    <h1>{item}</h1>
                    <h1>{item}</h1>
                    <h1>{item}</h1>
               </div>
             })
         }
    </div>
)    
} 