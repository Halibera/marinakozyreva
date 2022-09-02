

import React from "react";
import style from "./contacts.module.css";




const Contacts = () => {
    return (
        <section className={style.mainWrap}>
            <div className={style.container}>

                <img src="logo.jpg" alt="egc" className={style.image} width='300' />
                <section className={style.contacts}>

                    <p className={style.p1}>"Каждая женщина - это история,<br /> и мне не терпится рассказать ее миру."</p>
                    <p className={style.p2}>Марина Козырева </p>
                    {/* <p className={style.p1}>Тел.: WhatsApp/Telegram </p> */}
                    <p className={style.p2}>89107297999</p>
                    {/* <p className={style.p1}>https://vk.com/kozyrevaphoto</p>
                    <p className={style.p1}>marinakozireva88@yandex.ru</p> */}
                </section>
                <section className={style.icons}>
                    <a href="https://api.whatsapp.com/send/?phone=789107297999" ><img src="ws.svg" alt="egc" width='75' height='75' /></a>
                    <a href="https://t.me/marykozyreva" ><img src="tg.svg" alt="egc" width='75' height='75' /></a>
                    <a href="https://vk.com/kozyrevaphoto" ><img src="vk.svg" alt="egc" width='75' height='75' /></a>
                </section>

            </div>
            <div className={style.container}>
                <p className={style.p3}>"Каждая женщина - это история,<br /> и мне не терпится рассказать ее миру."</p>

            </div>
            {/* <p className={style.p1}>"Или давайте я Вам позвоню:" </p>
            <div className={style.container}>


                <form action="send.php" name="form" method="post">
                    <div className={style.form1}>
                        <label htmlFor="name">Имя</label>
                        <input name="name" type="name" id="name" placeholder={'Введите имя'} className={style.input} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Телефон</label>
                        <input name="phone" type="phone" id="phone" placeholder={'Введите телефон'} className={style.input} />
                    </div>

                    <button type="submit" className={style.buttons}> Свяжитесь со мной</button>

                </form>
            </div> */}

        </section >
    );
};



export default Contacts;
