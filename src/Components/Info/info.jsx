import React from "react";
import { NavLink } from "react-router-dom";
import style from "./info.module.css";



const Info = () => {
    return (
        <section className={style.wrap}>
            {/* <h2 className={style.mainh2}>Пакеты услуг:</h2>
       
                <div className={style.option}>

                    <h2 className={style.h2}>Пакет "Лайт"</h2>
                    <ul className={style.ul1}>
                        <li>Продолжительность 30 минут</li>
                        <li>1-2 образа, помощь в их подготовке</li>
                        <li>10-15 фото в детальной обработке и ретуши</li>
                        <li>30 фотографий в цветокоррекции</li>
                        <li>срок готовности фото - 4 недели</li>
                    </ul>
                    <p className={style.price}>Стоимость 5 500 руб.</p>
                    <div className={style.navLink}><NavLink to="/contacts" className={style.navLinkText}>Заказать съемку</NavLink></div>

                </div>
                <div className={style.option}>
                    <h2 className={style.h2}>Пакет "Стандарт"</h2>
                    <ul className={style.ul1}>
                        <li>Продолжительность 1 час</li>
                        <li>до 3 образов, помощь в их подготовке</li>
                        <li>20-30 фото в детальной обработке и ретуши</li>
                        <li>50 фотографий в цветокоррекции</li>
                        <li>срок готовности фото - 4 недели</li>
                    </ul>
                    <p className={style.price}>Стоимость 7 500 руб.</p>
                    <div className={style.navLink}><NavLink to="/contacts" className={style.navLinkText}>Заказать съемку</NavLink></div>
                </div>

                <div className={style.option}>
                    <h2 className={style.h2}>Пакет "Премиум"</h2>
                    <ul className={style.ul1}>
                        <li>Продолжительность 2 часа</li>
                        <li>до 5 образов, помощь в их подготовке</li>
                        <li>50 фото в детальной обработке и ретуши</li>
                        <li>70 фотографий в цветокоррекции</li>
                        <li>срок готовности фото - 6 недель</li>
                    </ul>
                    <p className={style.price}>Стоимость 10 500 руб.</p>
                    <div className={style.navLink}><NavLink to="/contacts" className={style.navLinkText}>Заказать съемку</NavLink></div>
                </div>
            </section>
            <section className={style.nb}>
                Аренда студии, услуги стилиста и визажиста оплачиваются отдельно.
            </section> */}

            <h2 className={style.mainh2}>Условия и цены</h2>
            <section className={style.text}>
                Стоимость фотосессии начинается от 10 000 рублей. Индивидуально подбирается образ, прорабатываются детали, выбирается локация. Обычно съёмка длится 2 часа. Если у Вас нет опыта работы перед камерой, это не проблема - я помогу расслабиться и раскрыться в кадре. Моя задача заключается не только в том, чтобы вы получили качественные фото на выходе, но и в том, чтобы Вы насладились процессом съемки. Срок готовности фото в среднем 4 недели (в зависимости от загруженности). Подробнее узнать об условиях съемки и записаться на фотосессию можно связавшись со мной удобным для Вас способом в разделе контакты.
            </section>
            <div className={style.navLink}><NavLink to="/contacts" className={style.navLinkText}>Связаться со мной</NavLink></div>

            <div className={style.picturesBlock}>
                <img src="../Price/1.jpg" alt="11" className={style.pic} />
                <img src="../Price/2.jpg" alt="11" className={style.pic} />
                <img src="../Price/3.jpg" alt="11" className={style.pic} />
            </div>
        </section >
    );
};

export default Info;
