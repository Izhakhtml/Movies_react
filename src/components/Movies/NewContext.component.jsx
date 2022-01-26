import React from "react";
export const NewContext = React.createContext()
export const MyNewContext =({children})=>{
const Post = {id:1,writerName:"izhak",text:"hello mgadim",likeNumbers:20}
const ArrrayPost=
[
    {id:1,writerName:"izhak",text:"hello mgadim",likeNumbers:20},
    {id:2,writerName:"shimon",text:"hello mgadim",likeNumbers:10},
    {id:3,writerName:"lial",text:"hello mgadim",likeNumbers:30},
    {id:4,writerName:"eden",text:"hello mgadim",likeNumbers:40},
]
return(
    <NewContext.Provider value={ArrrayPost}>
     {children}
    </NewContext.Provider>
)
}