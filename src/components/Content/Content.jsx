import React from 'react';
import Filters from './PanelFilters.jsx';
import ContaineriIem from "./ContainerItem.jsx";


class Content extends React.Component{
    render(){
        return(
                <div className="Content">
                    <div className = "container">
                        <div className ="content-wrapper">
                            <Filters store = {this.props.store} dispatch ={this.props.dispatch}/>
                            <ContaineriIem store ={this.props.store} dispatch = {this.props.dispatch}/>
                        </div>
                    </div>
                 </div>
        )
    }
}

export default Content;