import React,{useContext} from "react";
import { NewContext } from "./NewContext.component"
const Messages =()=>{
const MyConsumer = useContext(NewContext)
const UpdateData=(e)=>{
MyConsumer.obj={ first:e.target.value};
}
return(
    <div>
      <h1>{MyConsumer.obj.first}</h1>
      <input onChange={UpdateData}/>
      <button onClick={()=>{ MyConsumer.setObj(MyConsumer.obj)}}>Send</button>
    </div>
)
}
export default Messages