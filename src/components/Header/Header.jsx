import React from 'react';


class Header extends React.Component{
    constructor(props) {
        super(props);
        this.openbasket = this.openbasket.bind(this.props.dispatch);
        this.getBasket = this.getBasket.bind(this);
        this.DeleteItem = this.DeleteItem.bind(this.props.dispatch);
    }
    openbasket(e){
       if(e.target.getAttribute('id') == 'delimg'){
            return
       }
        this({
            type:'showbasket'
        });
    }
    getBasket(object){
        if(!object.basket.hasOwnProperty('items'))
            return <div> Корзина пуста</div>
        if(object.basket.hasOwnProperty('items')){
            if(object.basket.items.length == 0){
                return <div> Корзина пуста</div>
            }
        }
        let arra = object.basket.items.map((item)=>{
            for(let i = 0; i< this.props.items.length; i++){
                if(this.props.items[i].object_id == item*1 ){
                    return (<div className="basket-item">
                                <div className="basket-item-img">
                                    <img src={`http://b2b.topsports.ru/c/productpage/${this.props.items[i].images}.jpg`}/>
                                </div>
                                <div className="basket-item-info">
                                    <div className="basket-item-info-tytle">{this.props.items[i].title}</div>
                                    <div className="basket-item-info-price">{this.props.items[i].price1}</div>
                                </div>
                                <div className="basket-item-del">
                                    <img dataid = {item} id = "delimg" src="/img/del.svg" onClick = {this.DeleteItem} />
                                </div>
                            </div>)
                }
            }
        });
        return arra
    }
    DeleteItem(e){
        this(
            {   id:e.target.getAttribute("dataid"),
                type:'deleteItems',
            }
        )
    }
    render(){
        console.log(this.props);
        return (
            <header>
                <div className="container">
                    <div className = "header-wrapper">
                        <img src="../../img/logo.svg" />
                        <div className = "header-navigation">
                            <div className="header-navigation-item" >
                                Каталоги
                            </div>
                            <div className="header-navigation-item">
                                Закупка
                            </div>
                            <div className="header-navigation-item">
                                Оплаты
                            </div>
                        </div>
                        <div className = "login-wrapper">
                            <div className="user">
                                <div className ="user-icon">
                                    <img src="../../img/lk.png"/>
                                </div>
                                <div className ="user-name">
                                    Игорь Стародубцев
                                </div>
                            </div>
                            <div className="login-basket" onClick = {this.openbasket}>
                                {Object.keys(this.props.basket).length > 0 &&
                                            this.props.basket.hasOwnProperty('items') &&
                                            Object.keys(this.props.basket.items).length > 0 &&
                                            <div className="basket-count">
                                                { Object.keys(this.props.basket.items).length}
                                            </div>}
                                <img src="../../img/basket.svg"/>
                                {this.props.basket.open == true && <div className='basket-items'>{this.getBasket(this.props)}</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;