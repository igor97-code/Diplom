import React from 'react';





class Item extends React.Component{
    render(){
        return (
            <div className = "item">
                <div className = "image">
                    <img src={`http://b2b.topsports.ru/c/productpage/${this.props.item.images}.jpg`} alt=""/>
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
                            {this.props.item.price1}
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