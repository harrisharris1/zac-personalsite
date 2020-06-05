import React from "react"
import Cta from "../images/Meeting - CTA.png"
import Joel from "../images/Joel.png"
import qleft from "../images/quotes-left.png"
import qright from "../images/quotes-right.png"


const Blog = ()=>(
    <div className="BlogContainer">
        <div className="ctaSection">
           <img src={Cta}></img>
                {/* <h4>Want to talk marketing?</h4>
                <button>grab a zoom coffee with me</button> */}
        </div>

        <div className="quote">
            <img className="joel-img" src={Joel}></img>
            <h5> <img src={qleft} width="35px" height="35px"></img> Zac cares deeply about getting things right -- not only with SEO, but<br>
            </br>with marketing, user experience, and conversion too. I worked directly<br>
            </br>with Zac on an audit of SpyFu. He approached it with an open mind<br>
            </br>and a sincere desire to find the right path forward<span className="orange-dot"> .</span><img src={qright} width="35px" height="35px"></img></h5>
            <p>Joel Klettke, Founder at Case Study Buddy</p>

        </div>
    </div>
)
export default Blog