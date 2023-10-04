import React from "react";
import "./portfolio.css"
import { Sidebar } from "../../component/Sidebar/Sidebar";
import { NavLink } from "react-router-dom";


const Portfolio = () => {
    const emailAddress = 'siddhimahadik257@gmail.com';
    const phoneNumber = '8956681803'
    return (
        <div className="main">
            <Sidebar/>
            
            <div className="right scrollableDiv">
                <div className="leftside">
                    <h1>Hi, I'm <span>Siddhi!</span> <br />
                        Creative Developer <br />from India
                    </h1>
                    <p>I'm a India based UIUX designer & front‑end <br />developer with strong knowledge in Javascript ecosystem!
                    </p>
                    <div className="btns mbtns">
                
                    
                        <button className="btn1"><NavLink className="buttonlink" to={"/project"}>Got a project?</NavLink></button>
                        <button className="btn2"><NavLink className="buttonlink btnlink2"  to={"/contact"}>Let's talk</NavLink></button>
                    </div>
                    <div className="creds">
                        <div class="vertical-line"></div>
                        <ul>
                            <li><a className="colorChange" href={`tel:${phoneNumber}`}>8956681803</a>
                            </li>
                            <li><a className="colorChange" href={`mailto:${emailAddress}`}>siddhimahadik257@gmail.com</a></li>
                            <li><a className="colorChange"  href="">Chiplun, Maharashtra</a>
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