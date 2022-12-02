import React from 'react'
import "./Home1.css"
import { Home1data } from "./Home1data";
import Home1rating from "./Home1rating";
function Home1() {
  return (
    <div className="home1">
    <div className="home1-upper">
    <div className="home1-upper-left">
    <p className="home1-upper-left-text1">Easily Scale Your Business With
    An All-In-One <span style={{color:"red"}}>ERP Software</span></p>
    <p className="home1-upper-left-text2">Automate your finances, manage warehouse, HR, and projects, and lead the business world with an ease.</p>
    <div className="home1-upper-left-buttons">
    <button className="home1-upper-left-button1">Start for Free</button>
    <button className="home1-upper-left-button2">Book Demo</button>
    </div>
    </div>
    <div  className="home1-upper-right">
    <img className="home1-upper-right-image" src="https://uploads-ssl.webflow.com/5e53d34464688e6f5960a338/630d1ad7a363c42a329e2731_Dashboard%20HR%20Management.svg" alt="not-found" />
    </div>
    </div>





    <div className="home1-lower">
    <div className="home1-rating">
    <Home1rating details={Home1data}/>
</div>
    </div>
    
    </div>
  )
}

export default Home1