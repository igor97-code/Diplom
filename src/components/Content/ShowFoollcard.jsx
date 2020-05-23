import React from 'react';






let FullCard = (props)=>{
    function spliceImage(image){
        let img =  image.split(';');
        return img[0];
    }

    console.log(props);
    return(
        <div className="show-info">
            <div className = "show-info-img">
                <img src={`http://b2b.topsports.ru/c/productpage/${spliceImage(props.item.images)}.jpg`}/>
            </div>
            <div className='show-info-added'>
                <div className="tytle">
                    {props.item.title}
                </div>
            </div>
        </div>
    )
}


export default FullCard