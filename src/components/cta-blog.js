import React from "react"
import Cta from "../images/Meeting - CTA.png"
import Joel from "../images/Joel.png"
import qleft from "../images/quotes-left.png"
import qright from "../images/quotes-right.png"
import Moon from "../images/moon.jpg"
import Heart from "../images/heart.svg"
import Coffee from "../images/coffee.svg"



const Blog = ()=>(
    <div className="BlogContainer">
        <div className="ctaSection">
        <a target='_blank' href="https://calendly.com/zac-harris/30-minute-private?month=2020-06"><img src={Cta} className="desktop-img"></img></a>
            <div class="hide-indesk">
                     <img src={Coffee} className="coffee"></img>
                        <h4 className="mobile-cta">Want to talk <br>
                            </br>marketing?</h4>
                            <button className="mobile-btn">grab a zoom coffee with me</button>
            </div> 
        </div>

        <div className="quote">
            <img className="joel-img" src={Joel}></img>
            <h5> <img src={qleft} width="35px" height="35px"></img> Zac cares deeply about getting things right -- not only with SEO, but
            with marketing, user experience, and conversion too. I worked directly
            with Zac on an audit of SpyFu. He approached it with an open mind
            and a sincere desire to find the right path forward<span className="orange-dot"> .</span><img src={qright} width="35px" height="35px"></img></h5>
            <p>Joel Klettke, Founder at Case Study Buddy</p>

        </div>

        <div className="BlogCards">
                <div className="card">
                    <div className="textContainer">
                        <h6>Recordings Reloaded</h6>
                        <p>The redesign of a flagship feature powered by a
                        full-fledged design sprint</p>
                        <button>Read Blog Post</button> 
                    </div>
                    <img src={Moon}></img>
                </div>

                <div className="card">
                    <div className="textContainer">
                        <h6>Recordings Reloaded</h6>
                        <p>The redesign of a flagship feature powered by a<br>
                        </br>full-fledged design sprint</p>
                        <button>Read Blog Post</button>
                    </div>
                    <img src={Moon}></img>
                </div>
        </div>

         <div className="BlogCards2">
                <div className="card2">
                    <div className="textContainer2">
                        
                        <h6>Recordings Reloaded</h6>
                        <p>The redesign of a flagship feature powered by a
                        full-fledged design sprint</p>
                        <button>Read Blog Post</button> 
                    </div>
                    
                    <img src={Moon}></img>
                </div>

                <div className="card2">
                    <div className="textContainer2">
                        <h6>Recordings Reloaded</h6>
                        <p>The redesign of a flagship feature powered by a
                        full-fledged design sprint</p>
                        <button>Read Blog Post</button> 
                    </div>
                    <img src={Moon}></img>
                </div>
                
        </div>

        <div class="bottom">
               <div className="madeby">
                    <img src={Heart}></img>
                    <h6>made with love by andrea harris</h6>
                </div>
        </div>

        

      
            
    </div>
    
)
export default Blog