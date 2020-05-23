import React, {Component} from 'react';
import Header from "./Header/Header.jsx"
import Panel from "./SearchPanel/Panel.jsx";
import Content from "./Content/Content.jsx"

let App = (props)=>{
   return(
       <div>
         <Header/>
         <Panel dispatch = {props.dispatch}/>
         <Content store = {props.store} dispatch = {props.dispatch}/>
       </div>
   )
}


export default App;
