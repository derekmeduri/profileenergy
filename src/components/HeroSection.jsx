import React from "react";

const HeroSection = () => {
    return (
        <div className="grid grid-cols-4 items-start ">
            
            <div className="">
               
                <a href="/">Utility Information Management</a>
                <p>
                    <span className="font-bold"><a href="/">read more...</a></span>
                </p>
                </div>
            <div>
                <a href="/">Energy Procurement</a>
                <p>
                    <span className="font-bold"><a href="/">read more...</a></span>
                </p>
                </div>
            <div>
                <a href="/">Metering & Billing</a>
                <p>
                    <span className="font-bold"><a href="/">read more...</a></span>
                </p>
            </div>
            <div>
                <a href="/">
                Energy Efficiency & Sustainability
                </a>
                <p>
                    <span className="font-bold"><a href="/">read more...</a></span>
                </p>
                </div>
            
        </div>

    )
}

export default HeroSection;
