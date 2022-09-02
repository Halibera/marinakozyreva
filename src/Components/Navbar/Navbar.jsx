import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";


let burgercheckbox = 0;

const switcher = () => {

  if (burgercheckbox === 0) {
    burgercheckbox = 1;
    document.getElementById('burger').className = `${style.burgerSwitchOn}`
    document.getElementById('menuCaption').className = `${style.menuCaptionOff}`
  } else {
    burgercheckbox = 0;
    document.getElementById('burger').className = `${style.burgerSwitchOff}`;
    document.getElementById('menuCaption').className = `${style.menuCaptionOn}`
  }
};




const Navbar = () => {
  return (
    <nav className={style.navWrap + " notranslate"}>
      <div className={style.menu}>
        <hr></hr>
        <img src="/1.svg" alt="wow" width='25px' height='25px' className={style.burgerImg} onClick={switcher} />
        <div className={style.menuCaptionOn} id="menuCaption" >Меню</div>
        <div className={style.burgerSwitchOff} id="burger">
          <NavLink to="" className={({ isActive }) => (isActive ? style.active : style.a)} id="menu" onClick={switcher} >Главная</NavLink>
          <div className={style.b}>Портфолио</div>
          <div className={style.sub}>
            <NavLink to="/portraits" className={({ isActive }) => (isActive ? style.active : style.a)} onClick={switcher} >Портреты</NavLink>
            <NavLink to="/travel" className={({ isActive }) => (isActive ? style.active : style.a)} onClick={switcher}  >Travel</NavLink>
            <NavLink to="/families" className={({ isActive }) => (isActive ? style.active : style.a)} onClick={switcher} >Семейные</NavLink>
          </div>
          <NavLink to="/info" className={({ isActive }) => (isActive ? style.active : style.a)} onClick={switcher} >Условия и цены</NavLink>
          <NavLink to="/contacts" className={({ isActive }) => (isActive ? style.active : style.a)} onClick={switcher} >контакты</NavLink>

        </div>

      </div>


      <section className={style.about}>

        <p>
          <hr />
          <br />
          {/* Свадьбы, рестораны, праздники, дни рождения, званые вечера, концерты и выступления - это всё я очень люблю. Ну и фотографировать тоже. */}
          {/* Каждая женщина - это история, и мне не терпится рассказать ее миру. */}
        </p>



      </section>

    </nav >
  );
};


export default Navbar;
