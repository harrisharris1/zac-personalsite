import React from "react"
import "../components/layout.css"
import Moji from "../images/zac-moji.png"
import Instagram from "../images/instagram.svg"
import Linkedin from "../images/linkedin.svg"
import Twitter from "../images/twitter.svg"
import Medium from "../images/medium.svg"

const Head = () => (
  <div className="HeadContainer">
        <div className="greeting">
            <img src={Moji} width="50%"></img>
            <h2>I'm Zac, a <span className="orange underline">SaaS marketer</span>, Designer, and <br>
            </br>two-time founder. I'm the Chief Revenue<br>
            </br>officer at Northcutt by day, and design my <br>
            </br>my own projects by night.</h2>
           
             <div className="icons">
                 
                <img src={Linkedin} ></img>
                <img src={Twitter} ></img>
                <img src={Medium} ></img>
                <img src={Instagram} ></img>
             </div>
        </div>

        <div class="work-logos">
            <p>PLACES I'VE WORKED</p>
        </div>
        

  

  
    
  </div>
)
export default Head