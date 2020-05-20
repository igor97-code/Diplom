import React from 'react';
import Filters from './PanelFilters.jsx';
import Items from "./PanelItems.jsx";


class Content extends React.Component{
    render(){
        return(
            <div className = "container">
                <div className="Content">
                    <Filters/>
                    <Items/>
                </div>
            </div>
        )
    }
}

export default Content;