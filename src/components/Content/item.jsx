import React from 'react';
import FullCard from './ShowFoollcard.jsx'




class Item extends React.Component{
    constructor(props) {
        super(props);
        this.openinfo = this.openinfo.bind(this.props.dispatch);
    }
    openinfo(e){
        if(e.target.classList.contains('basket-button') || e.target.classList.contains('CloseItem')) return;
        console.log(123123123);
        this({
            type:'openitem',
            id:e.currentTarget.getAttribute('objectId')
        });
    }
    replaceImage(img){
        let image = img.split(';');
        return image[0];
    }
    SpacePrice(x){
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, "  ");
        return parts.join(".");
    }
    render(){

        return (
            <div className = "item" objectId = {this.props.item.object_id} onClick = {this.openinfo}>
                {this.props.item.check && <FullCard item = {this.props.item} dispatch = {this.props.dispatch}/>}
                <div className = "image">
                    <img src={`http://b2b.topsports.ru/c/productpage/${this.replaceImage(this.props.item.images)}.jpg`} alt=""/>
                </div>
                <div className ="item-info">
                    <div className="title-name">
                        {this.props.item.title}
                    </div>
                    <div className="price">
                        <div className="price-title">
                            Цена:
                        </div>
                        <div className="price-number">
                            {this.SpacePrice(this.props.item.price1)}
                        </div>
                    </div>
                    <div className="icon">
                        <div className="smoll">
                            <img src="/img/nice.png" alt=""/>
                            <img src="/img/time.png" alt=""/>
                        </div>
                        <div className="icon-basket">
                            <img src="/img/basket.svg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Item;