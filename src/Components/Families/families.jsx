import React from "react";

import style from "./families.module.css";
import { Link } from "react-router-dom";


let customers = [
    {
        id: 1,
        name: 'Настя - Шампань',
        titlePhoto: 1
    },
    {
        id: 2,
        name: 'Утро невесты',
        titlePhoto: 1
    },
    {
        id: 3,
        name: 'Юля - студия',
        titlePhoto: 1
    }


]



const albumElements = customers.map(a =>

    <div className={style.album} key={a.id}>

        <Link to={"/slider/families/" + a.id}><img className={style.imageContainer} src={"../Families/" + a.id + "/" + a.titlePhoto + ".jpg"} alt="missed" /></Link>

        <p className={style.name}>{a.name} </p>
    </div>)


const Families = (props) => {
    return (
        <section className={style.galery}>

            {albumElements}

        </section>
    );
};

export default Families;

