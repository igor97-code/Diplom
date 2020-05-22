 import React from 'react';


let Filters = (props) =>{
    let initialfilter = (e)=>{

        props.dispatch({
            type:'checkfilter',
            id : e.currentTarget.id,
            key: e.currentTarget.getAttribute('datakey'),
            value: e.currentTarget.getAttribute('value')
        });
    }
    let section = (ar)=> {
        let copar = ar.map((item) => {
            return <div className="section" key={item.id} id={item.id} datakey = {item.key} value ={item.tytle} onClick={initialfilter}>
                <div className={`section-checked ${item.check? 'check': ''}`}></div>
                <div className="section-title">{item.tytle}</div>
            </div>
        })
        return copar;
    }

    return(
        <div className="Filter">
            <div className="Filt-block">
                <div className="filt-title">
                    {props.store.filter[0].tytle}
                </div>
                <div className="filt-section">
                    {section(props.store.filter[0].items)}
                </div>
            </div>
            <div className="Filt-block">
                <div className="filt-title">
                    {props.store.filter[1].tytle}
                </div>
                <div className="filt-section">
                    {section(props.store.filter[1].items)}
                </div>
            </div>
        </div>
    )
 }


export default Filters;