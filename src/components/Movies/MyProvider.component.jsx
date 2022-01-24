import React from "react";
export const MoviesContext = React.createContext();
export const MyProvider =(props)=>{
const MoviesArray = 
[
    {
      movieName:"The Mask",
      rating:10
      
    },
    {
      movieName:"The Sky",
      rating:7
    },
    {
      movieName:"The Black",
      rating:8
    },
    {
      movieName:"The Datk",
      rating:9
    }
]
return(
     <MoviesContext.Provider value={MoviesArray}>
        {props.children}
     </MoviesContext.Provider>
)   
}