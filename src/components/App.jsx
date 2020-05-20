import React, {Component} from 'react';
import Header from "./Header/Header.jsx"
import Panel from "./SearchPanel/Panel.jsx";
import Content from "./Content/Content.jsx"

let App = ()=>{
   return(
       <div>
         <Header/>
         <Panel/>
         <Content/>
       </div>
   )
}


export default App;
