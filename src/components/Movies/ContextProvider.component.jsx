import React from "react";
export const MyProvider2 = React.createContext();
export const ContextProvider =({children})=>{
// const Comment = {name:"izhak",text:"hello people",viewNumber:11}
const ArrayComments =
[
    {name:"izhak",text:"hello people",viewNumber:11},
    {name:"shlomo",text:"hello people",viewNumber:12},
    {name:"avrham",text:"hello people",viewNumber:19},
    {name:"ahimon",text:"hello people",viewNumber:12}
]
return(
    <MyProvider2.Provider value={ArrayComments}>
        {children}
    </MyProvider2.Provider>
)    
}
