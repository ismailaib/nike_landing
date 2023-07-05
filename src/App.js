import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Features from "./components/Features"

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Home />
            <Features />
        </div>
    )
}