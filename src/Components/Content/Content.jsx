import React from "react";
import style from "./content.module.css";





const Navbar = () => {
  return (
    <section className={style.mainPicture}>
      <section className={style.block1}>
        <img src="../1.jpg" alt="11" className={style.slide + " " + style.pic1} />
        <img src="../2.jpg" alt="11" className={style.slide + " " + style.pic2} />
        <img src="../3.jpg" alt="11" className={style.slide + " " + style.pic3} />
      </section>


      <div className={style.bottomSection}>
        <section className={style.block2}>
          <img src="../4.jpg" alt="11" className={style.slide2 + " " + style.pic4} />
          <img src="../5.jpg" alt="11" className={style.slide2 + " " + style.pic5} />
          <img src="../6.jpg" alt="11" className={style.slide2 + " " + style.pic6} />
        </section>

        <section className={style.block3}>

          <img src="../7.jpg" alt="11" className={style.slide3 + " " + style.pic7} />
          <img src="../8.jpg" alt="11" className={style.slide3 + " " + style.pic8} />
          <img src="../9.jpg" alt="11" className={style.slide3 + " " + style.pic9} />

        </section>
      </div>
    </section >
  );
};

export default Navbar;
