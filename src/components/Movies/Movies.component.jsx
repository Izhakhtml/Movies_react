import React,{useContext} from "react";
import { MoviesContext } from "./MyProvider.component";
import { Likes } from "./Likes.component";
export const Movies =()=>{
const ConsumerContext = useContext(MoviesContext)
return(
<div id="head_div">
    {
        ConsumerContext.map((item)=>(
         <article className="article_details">
                <h2 style={{color:item.color,background:item.background,border:`15px solid ${item.color}`}}>Movie Name:{item.movieName}</h2>
                <img src={item.link}/>
                <Likes/>
                <h4 style={{color:item.color2,background:item.background,border:`5px solid ${item.color2}`,padding:"5px"}}>Rating:{item.rating}</h4>         
                
         </article>
        ))
    }
</div>
)   
}