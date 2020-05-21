import React from 'react';
import Filters from './PanelFilters.jsx';
import Items from "./PanelItems.jsx";


class Content extends React.Component{
    render(){
        console.log(this.props);
        return(
                <div className="Content">
                    <div className = "container">
                        <div className ="content-wrapper">
                            <Filters store = {this.props.store} dispatch ={this.props.dispatch}/>
                            <Items store ={this.props.store}/>
                        </div>
                    </div>
                 </div>
        )
    }
}

export default Content;