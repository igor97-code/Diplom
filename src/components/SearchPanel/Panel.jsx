import React from 'react';


class Panel extends React.Component{

    render(){
        return (
            <nav>
                <div className = "container">
                    <div className="Panel-wrapper">
                        <div className="panel-filter">
                            <div className="panel-filter-item">Экипировка</div>
                            <div className="panel-filter-item">Одежда</div>
                            <div className="panel-filter-item">Обувь</div>
                            <div className="panel-filter-item">Шлема</div>
                            <div className="panel-filter-item">Оптика</div>
                            <div className="panel-filter-item">Защита</div>
                            <div className="panel-filter-item">Снаряжение</div>
                            <div className="panel-filter-item">Сумки и рюкзаки</div>
                        </div>
                        <div className="panel-search">
                            <input placeholder="Поиск"/>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Panel;