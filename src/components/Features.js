import React from "react";
import Cards from "./Cards"

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope , faChartPie , faCircleNodes , faCreditCard , faClock , faAddressCard , faChartLine , faComputer} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faEnvelope , faChartPie , faCircleNodes , faCreditCard , faClock , faAddressCard , faChartLine , faComputer);


export default function Features() {
    return (
        <div className="features">
            <div className="tag_name tag_features">
                <h5>Features</h5>
            </div>
            <div className="features_content">
                <h2>Another features only for your business</h2>
                <p>Here are several features we provide to you to make the greatest CRM system for your business.</p>
            </div>
            <div className="cards">
                <Cards 
                    icon={faEnvelope}
                    title="Chat System"
                    desc="Get in touch with your customer easily."
                />
                <Cards 
                    icon={faChartPie}
                    title="Business Analytics"
                    desc="Manage your business deeper everytime."
                />
                <Cards 
                    icon={faCircleNodes}
                    title="Business Explore"
                    desc="Explore your business for the future growth."
                />
                <Cards 
                    icon={faCreditCard}
                    title="No Payment Include"
                    desc="There’s nothing another payment inside it."
                />
                <Cards 
                    icon={faClock}
                    title="Time Scheduling"
                    desc="Manage and handle your time"
                />
                <Cards 
                    icon={faAddressCard}
                    title="Customer Stats"
                    desc="Keep up-to-date with your customer statistics"
                />
                <Cards 
                    icon={faChartLine}
                    title="Sales Management"
                    desc="Grow and increase your business sales."
                />
                <Cards 
                    icon={faComputer}
                    title="Flexibility System"
                    desc="Control your business anywhere anytime."
                />
            </div>
            <button className="home_btn second_btn">Learn More</button>
        </div>
    );
}
