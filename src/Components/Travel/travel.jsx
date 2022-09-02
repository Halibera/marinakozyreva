import React from "react";

import style from "./travel.module.css";
import { Link } from "react-router-dom";


let customers = [
    {
        id: 1,
        name: 'Paris',
        titlePhoto: 1
    },
    {
        id: 2,
        name: 'Prague',
        titlePhoto: 1
    },
    {
        id: 3,
        name: 'Italy',
        titlePhoto: 1
    }

]


const albumElements = customers.map(a =>

    <div className={style.album} key={a.id}>

        <Link to={"/slider/travel/" + a.id}><img className={style.imageContainer} src={"../Travel/" + a.id + "/" + a.titlePhoto + ".jpg"} alt="missed" /></Link>

        <p className={style.name}>{a.name} </p>
    </div>)


const Travel = (props) => {
    return (
        <section className={style.galery}>

            {albumElements}

        </section>
    );
};

export default Travel;

