import React from 'react';






let FullCard = (props)=>{
    function spliceImage(image){
        let img =  image.split(';');
        return img[0];
    }
    let getoptions = function(item){
        var stroke = [];
        for(let key in item.options){
            let opt = <div className = "option">
                        <div className="option-tytle">
                            {optnames[key]}
                        </div>
                        <div className="option-value">
                            {item.options[key]}
                        </div>
                      </div>
            stroke.push(opt);
        }
        console.log(stroke);
        return stroke;
    }
    let addbasket  = function(e){
       let itemId = e.target.getAttribute('dataid');
        props.dispatch({
            type:'addbasket',
            id:itemId
        });
    }
    let closeItem = () =>{
        props.dispatch({
            type:'closeItem',
        });
    }


    console.log(props);
    return(
        <div className="show-info">
            <div className="show-info-exit">
                <img className="CloseItem" src="/img/cross-headers.png" onClick = {closeItem} />
            </div>
            <div className="show-info-wrapper">
            <div className = "show-info-img">
                <img src={`http://b2b.topsports.ru/c/productpage/${spliceImage(props.item.images)}.jpg`}/>
            </div>
            <div className='show-info-added'>
                <div className="tytle">
                    {props.item.title}
                </div>
                <div className="show-info-price">
                    <div className="tytle">
                        Цена
                    </div>
                    <div className="price">
                        {props.item.price1}
                    </div>
                </div>
                <div className="option-wrapper">
                    {getoptions(props.item)}
                </div>
                <div className="basket">
                    <button className="basket-button" dataid = {props.item.object_id} onClick = {addbasket}>Добавить в корзину</button>
                </div>
            </div>
            </div>
        </div>
    )
}


export default FullCard