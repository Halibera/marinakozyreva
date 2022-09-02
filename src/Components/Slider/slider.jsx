import React from "react";

import "./slider.css";

let summ = 1;


const Slider = (props) => {
    let a = parseInt(document.location.href[document.location.href.length - 1]);
    let b = parseInt(document.location.href[document.location.href.length - 2]);
    console.log(a);
    console.log(b);
    if (!isNaN(parseInt(b))) { summ = parseInt(a) + (parseInt(b) * 10) } else summ = parseInt(a);

    console.log(a);
    console.log(b);
    console.log(summ);
    console.log(props.source);
    return (

        <section className="sliderPage">

            <section id="slider">
                <input className="in" type="radio" name="slider" id="s1" defaultChecked />
                <input className="in" type="radio" name="slider" id="s2" />
                <input className="in" type="radio" name="slider" id="s3" />
                <input className="in" type="radio" name="slider" id="s4" />
                <input className="in" type="radio" name="slider" id="s5" />
                <label for="s1" id="slide1" className="imgContainer"><img className="imgSlider" src={"/" + props.source + "/" + summ + "/1.jpg"} alt="11" /></label>
                <label for="s2" id="slide2" className="imgContainer"><img className="imgSlider" src={"/" + props.source + "/" + summ + "/2.jpg"} alt="11" /></label>
                <label for="s3" id="slide3" className="imgContainer"><img className="imgSlider" src={"/" + props.source + "/" + summ + "/3.jpg"} alt="11" /></label>
                <label for="s4" id="slide4" className="imgContainer"><img className="imgSlider" src={"/" + props.source + "/" + summ + "/4.jpg"} alt="11" /></label>
                <label for="s5" id="slide5" className="imgContainer"><img className="imgSlider" src={"/" + props.source + "/" + summ + "/5.jpg"} alt="11" /></label>
            </section>
        </section>
    )
}

export default Slider;