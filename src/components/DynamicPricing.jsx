import React from "react";
import Slider from "./Slider";
import ToggleBilling from "./ToggleBilling";

function DynamicPricing(){

    return (
        <div className="dynamicPricing">
            <div className="dynamicPricing__pricing">
                <p className="pricing__pageViews">100K PAGEVIEWS</p>
                <p className="pricing__package"><span className="pricing__amount">$16.00</span> / month</p>
            </div>
            <Slider />
            <ToggleBilling />
        </div>
    );

}

export default DynamicPricing;