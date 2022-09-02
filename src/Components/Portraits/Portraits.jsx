import React from "react";

import style from "./portraits.module.css";
import { Link } from "react-router-dom";



let customers = [
  {
    id: "1",
    name: 'Вероника - Париж',
    titlePhoto: 1
  },
  {
    id: "2",
    name: 'Ира - Довиль',
    titlePhoto: 1
  },
  {
    id: "3",
    name: 'Марина',
    titlePhoto: 1
  },
  {
    id: "4",
    name: 'Даша - студия',
    titlePhoto: 1
  },
  {
    id: "5",
    name: 'Ира - Париж',
    titlePhoto: 1
  },
  {
    id: "6",
    name: 'Кристина',
    titlePhoto: 1
  },
  {
    id: "7",
    name: 'Юля - Париж',
    titlePhoto: 1
  },
  {
    id: "8",
    name: 'Марина - студия',
    titlePhoto: 1
  },
  {
    id: "9",
    name: 'Даша',
    titlePhoto: 1
  },
  {
    id: "10",
    name: 'Таня - Питер',
    titlePhoto: 1
  },
  {
    id: "11",
    name: 'Натали - студия',
    titlePhoto: 1
  },
  {
    id: "12",
    name: 'Таня',
    titlePhoto: 1
  }

]

const albumElements = customers.map(a =>

  <div className={style.album} key={a.id}>

    <Link to={"/slider/portraits/" + a.id}><img className={style.imageContainer} src={"../Portraits/" + a.id + "/" + a.titlePhoto + ".jpg"} alt="missed" /></Link>

    <p className={style.name}>{a.name} </p>
  </div>)


const Portraits = (props) => {
  return (
    <section className={style.galery}>

      {albumElements}

    </section>
  );
};

export default Portraits;





