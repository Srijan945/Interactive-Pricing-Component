import React from "react";

function ToggleBilling(){

    return (
        <div className="toggleBilling">
            <p className="toggleBilling__item billing">Monthly Billing</p>

            <div className="toggleBilling__item toggle"></div>
            
            <p className="toggleBilling__item billing">Yearly Billing</p>
            
            <p className="toggleBilling__item discount">25% discount</p>
        </div>
    );
}

export default ToggleBilling;