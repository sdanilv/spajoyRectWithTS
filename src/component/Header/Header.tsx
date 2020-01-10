import React from "react";
import style from "./Header.module.scss"

const  Header :React.FC = props =>{
return <nav className={style.header}>
    {/*<a className="navbar-brand" href="#" style="padding-left: 50px">Spajoy</a>*/}
    {/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"*/}
    {/*        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">*/}
    {/*    <span className="navbar-toggler-icon"></span>*/}
    {/*</button>*/}

    <div className="collapse navbar-collapse justify-content-end" id="navbarText">
        <ul className="navbar-nav ml-auto">
            <li className=" active"><a href="#about" className="nav-link">Про компанію</a></li>
            <li className=""><a href="#how" className="nav-link">Як це працює</a></li>
            <li ><a href="#delivery" className="nav-link">Доставка</a></li>
            <li ><a href="#contact" className="nav-link">Контакти</a></li>

        </ul>

    </div>
</nav>

};
export  default Header;