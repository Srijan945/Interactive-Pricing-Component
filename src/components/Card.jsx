import React from "react";
import DynamicPricing from "./DynamicPricing";
import PricingBenefits from "./PricingBenefits";

function Card(){
    return (
        <main className="card">
            <DynamicPricing />
            <PricingBenefits />
        </main>
    );
}

export default Card;