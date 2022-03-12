import React, { useState,useEffect,useRef } from "react";
import Slider from "./Slider";
import ToggleBilling from "./ToggleBilling";

function DynamicPricing(){

    const pageViews = ["10K","50K","100K","500K","1M"];
    const amounts = ["8","12","16","24","36"];
    const [pageView,setPageView] = useState("100K");
    const [amount,setAmount] = useState("16");
    const [billing , setBilling] = useState("monthly");
    const [isSmall,setIsSmall] = useState(true);
    const isMounted = useRef(false);

    const mediaQueryList = window.matchMedia("(max-width: 500px)");
    function handleOrientationChange(){
        if(!mediaQueryList.matches){
            console.log("finally2");
            setIsSmall(false);
        }else{
            setIsSmall(true);
        }
    }
    mediaQueryList.addEventListener('change', handleOrientationChange);
    useEffect(function(){
        handleOrientationChange();
    },[]);

    useEffect(function(){
        if(isMounted.current){
            setAmount(billing === "yearly" ? (Number(amount)/4).toString() : (Number(amount)*4).toString());
        }else{
            isMounted.current=true;
            // setAmount(billing === "yearly" ? (Number(amount)/4).toString() : (Number(amount)*4).toString());
        }
    },[billing]);

    function changePrice(value){
        setPageView(pageViews[value-1]);
        setAmount(billing === "yearly" ? (Number(amounts[value-1])/4).toString() : amounts[value-1]);
    }
    return (
        <div className="dynamicPricing">
            <div className="dynamicPricing__pricing">
                <p className="pricing__pageViews">{pageView} PAGEVIEWS</p>
                { 
                    !isSmall && <p className="pricing__package">
                    <span className="pricing__amount">${amount}.00</span> 
                    <span className="pricing__time">/ month</span>
                    </p> 
                }
            </div>
            <Slider changePrice={changePrice}/>
            { 
                isSmall && <p className="pricing__package">
                <span className="pricing__amount">$16.00</span> 
                <span className="pricing__time">/ month</span>
                </p> 
            }
            <ToggleBilling billing={billing} setBilling={setBilling}/>
        </div>
    );

}

export default DynamicPricing;