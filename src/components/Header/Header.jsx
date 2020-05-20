import React from 'react';


class Header extends React.Component{

    render(){
        return (
            <header>
                <div className="container">
                    <div className = "header-wrapper">
                        <img src="../../img/logo.svg" />
                        <div className = "header-navigation">
                            <div className="header-navigation-item">
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
                            <div className="login-basket">
                                <img src="../../img/basket.svg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;