import React from "react"


export default function Navbar() {
    return (
        <header>
            <nav>
                <div className="logo">
                        <h3>D</h3>
                        <h4>Decko</h4>
                </div>
                <div className="elements">
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">FEATURES</a></li>
                            <li><a href="#">CASES</a></li>
                            <li><a href="#">PRICING</a></li>
                            <li><a href="#">ABOUT US</a></li>
                        </ul>
                </div>
                <button className="nav_btn"> Get Started </button>
            </nav>
        </header>
        

    )
}