import React,{useContext} from "react";
import { NewContext } from "./NewContext.component";
const Messages =()=>{
const MyConsumer = useContext(NewContext)
return(
    <div>
        {
            MyConsumer.map((item)=>(
                <>
                <h1>{item.writerName}</h1>
                <h1>{item.text}</h1>
                <h1>{item.likeNumbers}</h1>                   
                </>
            ))
        }

    </div>
)
}
export default Messages