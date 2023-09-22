import { Sidebar } from '../../component/Sidebar/Sidebar';
import './about.css'

const About = () => {

    return (
        <div className="main">
            <Sidebar />
            <div className="maindiv scrollableDiv">

                <div className="upper">
                    <div className="leftarea">

                        <div className="title">
                            <p>- NICE TO MEET YOU!</p>
                            <h3>Siddhi Mahadik</h3>
                            <span>UI/UX Designer & Developer</span><br />
                            <div className="bttns">
                                <button>Got a project?</button>
                            </div>
                        </div>

                    </div>
                    <div className="rightarea">
                        <div className="text">
                            <p>Hello there! My name is <span>Siddhi Mahadik</span>. I am a UI/UX designer & front-end developer, and I'm very passionate and dedicated to my work.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, error voluptates id tenetur impedit, ea nobis praesentium saepe voluptas atque ratione sequi distinctio inventore cum in doloremque neque dolorum odit
                            </p>
                            <div className="infodetails">
                                <div className="headings">
                                    <p>AGE</p>
                                    <p>BORN IN</p>
                                    <p>MAIL</p>
                                    <p>PHONE</p>
                                </div>
                                <div className="details">
                                    <a>21</a>
                                    <a href="">Maharastra, India</a>
                                    <a href="">siddhimahadik257@gmail.com</a>
                                    <a href="">8956681803</a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="lower">
                    <div className="box">
                        <div className="innerdiv1 common">
                            <h3>10+</h3>
                            <span>YEARS OF EXPERIENCE</span>
                        </div>
                        <div className="innerdiv2 common">
                            <h3>50+</h3>
                            <span>PROJECTS COMPLETED</span>
                        </div>
                        <div className="innerdiv3 common">
                            <h3>30+</h3>
                            <span>HAPPY CLIENTS</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;