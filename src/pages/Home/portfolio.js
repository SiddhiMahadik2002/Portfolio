import React from "react";
import "./portfolio.css"
import { Sidebar } from "../../component/Sidebar/Sidebar";

const Portfolio = () => {
    return (
        <div className="main">
            <Sidebar/>
            <div className="right">
                <div className="leftside">
                    <h1>Hi, I'm <span>Siddhi!</span> <br />
                        Creative Developer <br />from India
                    </h1>
                    <p>I'm a India based UIUX designer & front‑end <br />developer with strong knowledge in Javascript ecosystem!
                    </p>
                    <div className="btns">
                        <button>Got a project?</button>
                        <button>Let's talk</button>
                    </div>
                    <div className="creds">
                        <div class="vertical-line"></div>
                        <ul>
                            <li><a href="">8956681803</a>
                            </li>
                            <li><a href="">siddhimahadik257@gmail.com</a></li>
                            <li><a class="href_location" href="#">Chiplun, Maharashtra</a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="rightside">
                    <img src="https://media.licdn.com/dms/image/C5603AQEVOY_esXCjDQ/profile-displayphoto-shrink_800_800/0/1660486102148?e=2147483647&v=beta&t=b10MeZxPFVu2olAiB8ZVyC83a3ESUnO4-xZdBbCYV6E" alt="" />
                </div>
            </div>
        </div>

    )
}
export default Portfolio;