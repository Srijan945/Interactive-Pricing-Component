import React from "react";

function Slider(){

    return (
        <div className="sliderContainer">
            <input className="slider" type="range" min="1" max="5" /> 
        </div>
    );
}

export default Slider;