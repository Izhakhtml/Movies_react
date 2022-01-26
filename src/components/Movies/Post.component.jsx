import React from "react";
import Messages from "./Messages.component";
import { MyNewContext } from "./NewContext.component";
const Post=()=>{
return(
    <MyNewContext>
          <Messages/>        
    </MyNewContext>
)    
}
export default Post