import React from "react";

function PricingBenefits(){
    return (
        <div className="pricingBenefits">
        
            <div className="pricingBenefits__benefits">
                
                <span>
                    <img className="benefits__img" src="images/icon-check.svg" alt="check" />
                    <p className="benefits__item">Unlimited websites</p>
                </span>
                <span>
                    <img className="benefits__img" src="images/icon-check.svg" alt="check" />
                    <p className="benefits__item">100% data ownership</p>
                </span>
                <span>
                    <img className="benefits__img" src="images/icon-check.svg" alt="check" />
                    <p className="benefits__item">Email reports</p>
                </span>

            </div>

            <div className="pricingBenefits__trail">

                <button className="trail__button">Start my trial</button>

            </div>
        </div>
    );
}

export default PricingBenefits;