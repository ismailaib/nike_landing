import React from "react"

import home_img from "../img/home_img.png"
import boston from "../img/boston.png"
import google from "../img/google.png"
import microsoft from "../img/microsoft.png"
import samsung from "../img/samsung.png"
import sonos from "../img/sonos.png"


export default function Home() {
    return (
        <div className="home">
            <div className="home_section">
                <div className="home_content">
                    <div className="tag_name">
                        <h5>10k Users Around The World</h5>
                    </div>
                    <h1>Manage Customer and Business Without Limit</h1>
                    <p>
                         the relation between your business and your customer perfectly
                        with AI based Customer Relationship Management in Decko. No more
                        miscommunication, no more business value decresion
                    </p>
                    <div className="btns">
                        <button className="home_btn principal_btn">Get Started</button>
                        <button className="home_btn second_btn">Watch the Demo</button>
                    </div>
                </div>
                <div className="home_statistics">
                    { <img src={home_img} /> }
                </div>
            </div>
            <div className="companies">
                <h2>Over 1.5K business companies growing with our software</h2>
                <div className="companies_logos">
                    <img src={boston} />
                    <img src={google} />
                    <img src={microsoft} />
                    <img src={samsung} />
                    <img src={sonos} />
                </div>
            </div>

        </div>
    )
}