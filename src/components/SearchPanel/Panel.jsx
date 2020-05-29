import React from 'react';


class Panel extends React.Component{
    constructor(props) {
        super(props);
        this.initialfilter = this.initialfilter.bind(this.props.dispatch);
        this.checkMenu = this.checkMenu.bind(this.props.dispatch);
    }
    initialfilter(e){
       this({
            type:'checkfilter',
            key: e.currentTarget.getAttribute('datakey'),
            value: e.currentTarget.getAttribute('value')
        });
    }
    checkMenu(){
        this({
            type:'checkmenu',
        })
    }
    render(){
        console.log(this.props);
        return (
            <nav  className=
                {
                   this.props.menu.hasOwnProperty("open") && this.props.menu.open == true? 'main-menu-open' : ''

                }>
                    <div className = "container">
                        <div className='nav-wrapper'>
                          <div className="header__burger" id="menu-burger"  onClick = {this.checkMenu}>
                             <span className="line line-top" >
                              <span className="crust crust-top"></span>
                             </span>
                            <span className="line line-bottom">
                              <span className="crust crust-bottom"></span>
                              </span>
                        </div>
                        <div className="Panel-wrapper">
                            <div className="panel-filter">
                                <div className="panel-filter-item">Экипировка</div>
                                <div className="panel-filter-item" datakey = 'odegda' value ='1' onClick={this.initialfilter}>Одежда</div>
                                <div className="panel-filter-item"  datakey = 'obuv' value ='1'onClick={this.initialfilter}>Обувь</div>
                                <div className="panel-filter-item"  datakey = 'shlem' value ='1'onClick={this.initialfilter}>Шлема</div>
                                <div className="panel-filter-item"  datakey = 'optic' value ='1'onClick={this.initialfilter}>Оптика</div>
                                <div className="panel-filter-item"  datakey = 'zashita' value ='1'onClick={this.initialfilter}>Защита</div>
                                <div className="panel-filter-item"  datakey = 'snarag' value ='1'onClick={this.initialfilter}>Снаряжение</div>
                                <div className="panel-filter-item" datakey = 'sumruk' value ="1"onClick={this.initialfilter}>Сумки и рюкзаки</div>
                            </div>
                            <div className="panel-search">
                                <input placeholder="Поиск"/>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Panel;