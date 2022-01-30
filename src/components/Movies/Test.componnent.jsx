import React from "react";
import { MyNewContext } from "./NewContext.component";
import Messages from "./Messages.component";
const Test=()=>{
return(
<MyNewContext>
   <Messages/>
</MyNewContext>
)    
}
export default Test