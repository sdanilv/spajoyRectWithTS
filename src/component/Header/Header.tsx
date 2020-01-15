import React, {useState} from "react";
import style from "./Header.module.scss"

const Header: React.FC = props => {
    const [seeNavbar, isSeeNavbar] = useState<boolean>(true);
    const NavbarButton: React.FC = () => <img onClick={() => isSeeNavbar(!seeNavbar)} alt="navbarImg"className={style.navbarButton}
                                        src="https://cdn4.iconfinder.com/data/icons/mobile-app-navigation-line-style/32/Hamburger_Menu-512.png"/>;

    return <nav className={style.header}>
        <div className={style.logo}> Spajoy</div>
        {seeNavbar ?
           <NavbarButton /> :
            <div className={style.navbar}>
                <ul className="">
                    <li className=" active"><a href="#about" className="nav-link">Про компанію</a></li>
                    <li className=""><a href="#how" className="nav-link">Як це працює</a></li>
                    <li><a href="#delivery" className="nav-link">Доставка</a></li>
                    <li><a href="#contact" className="nav-link">Контакти</a></li>
                    <NavbarButton />
                </ul>
            </div>}
    </nav>

};
export default Header;