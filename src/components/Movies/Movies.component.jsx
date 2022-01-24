import React,{useContext} from "react";
import { MoviesContext } from "./MyProvider.component";
export const Movies =()=>{
const ConsumerContext = useContext(MoviesContext)
return(
     <div>
          {
            ConsumerContext.map((item)=>(
                <div>
                    <h1>{item.movieName}</h1>
                    <h1>{item.rating}</h1>         
                </div>
            ))
          }
     </div>
)   
}