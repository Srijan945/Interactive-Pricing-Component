import React, { useState } from "react";

function Slider(props){

    const [sliderValue,setSliderValue] = useState("3");
    //Width to color
    let width1 = ((sliderValue-1)*25).toString() + "%";
    //Overlapping width to remove 
    let width2 = (0.62*(sliderValue-1)).toString() + "rem";
    
    let styleSheet = {
        width: `calc(${width1} - ${width2})`
    }
    
    function handleInput(event){
        // console.log(event.target.value)
        const {value} = event.target;
        setSliderValue(value);
        props.changePrice(value);
    }
    return (
        <div className="sliderContainer">
            <input onInput={handleInput} className="slider" value={sliderValue} type="range" min="1" max="5"/>
            <div style={styleSheet} className="slider__track"></div> 
        </div>
    );
}

export default Slider;