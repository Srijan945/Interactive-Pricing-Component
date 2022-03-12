import React from "react";

function PricingBenefits(){
    return (
        <div className="pricingBenefits">
        
            <div className="pricingBenefits__benefits">
                
                <div className="benefits__item">
                    <img className="benefits__img" src="images/icon-check.svg" alt="check" />
                    <span className="benefits__item">Unlimited websites</span>
                </div>
                <div className="benefits__item">
                    <img className="benefits__img" src="images/icon-check.svg" alt="check" />
                    <span className="benefits__item">100% data ownership</span>
                </div>
                <div className="benefits__item">
                    <img className="benefits__img" src="images/icon-check.svg" alt="check" />
                    <span className="benefits__item">Email reports</span>
                </div>

            </div>

            <div className="pricingBenefits__trail">

                <button className="trail__button">Start my trial</button>

            </div>
        </div>
    );
}

export default PricingBenefits;