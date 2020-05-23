import React from 'react';
import Items from "./PanelItems.jsx";



let ContainerItem  = (props)=>{
    var Arrayitem = props.store.items;
    function ffilter(item){
        for(let key in props.store.arfilter){
            var xfound = 0;
            for(let i = 0; i <props.store.arfilter[key].length; i++){
                if(item[key] == props.store.arfilter[key][i]){
                    xfound = 1;
                    break;
                }
            }
            if(!xfound) return false
        }
        return true
    }
    if(Object.keys(props.store.arfilter).length != 0){
        let items = props.store.items.filter((item)=> ffilter(item) );
        Arrayitem = items;

    }
    let MinItems = [];
    for(let i = 0; i < 40; i++){
        if(typeof  Arrayitem[i] != 'undefined')
        MinItems.push(Arrayitem[i]);
    }
    if(MinItems.length == 0){
     return(
         'Ничего не найдено'
     )
    }
    return(
        <Items items = {MinItems} dispatch = {props.dispatch}/>
    )
}



export default ContainerItem