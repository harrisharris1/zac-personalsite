import React from "react"
import ThinkingZac from "../images/thinkingzac.svg"



const Main =() =>(
    <div className="mainContainer">
        <div className="AboutMeSection">
            <img src={ThinkingZac}></img>
            <div className="AboutParagraphs">
                <h2>Things to know <span class="underline">about me.</span> </h2>
                <div className="paragraphs">
                    <h3>Who am I?</h3>
                    <p>My name is Zac Harris, and I am a Father and Husband before anything. I<br>
                    </br>am 2x founder, Senior SEO and UI Designer based in Chicago. I founded<br>
                    </br>Prelim, Tripvo, and Jeffery. I've worked for companies like SpyFu and <br>
                    </br>Northcutt.</p>
                </div>
                <div className="paragraphs">
                    <h3>What do I do?</h3>
                    <p>I combine research, user flows, wireframing, prototyping, and storytelling,<br>
                    </br>to transform SEO data into revenue producing campaigns. With a <br>
                    </br>background in Technical SEO, I understand the constrains of the web and<br>
                    </br>am able to design and build SEO campaigns around them effectively.</p>
                </div>
                <div className="paragraphs">
                    <h3>What am I passionate about?</h3>
                    <p>Football used to be a way of life for me. I still love the game, but I use it<br>
                    </br>as a vechile to guide our inner-city youth. As a SEO enthusiast, I believe<br>
                    </br>that removing the noise and lowering the barrier of entry into SEO will<br>
                    </br>empower more people to create sound SEO strategies.</p>
                </div>
            </div>
        </div>

    </div>
)
export default Main
