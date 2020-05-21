import React from 'react';
import Item from './item.jsx';



class Items extends React.Component{
    render(){
        let itemarray = this.props.store.items.map((item)=> <Item item = {item}/>);
        return(
            <div className="item-wrapper">{itemarray}</div>
        )
    }
}

export default Items