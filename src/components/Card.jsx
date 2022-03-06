import React from "react";
import DynamicPricing from "./DynamicPricing";
import PricingBenefits from "./PricingBenefits";

function Card(){
    return (
        <main>
            <DynamicPricing />
            <PricingBenefits />
        </main>
    );
}

export default Card;