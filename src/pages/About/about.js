import { NavLink } from 'react-router-dom';
import { Sidebar } from '../../component/Sidebar/Sidebar';
import './about.css'

const About = () => {
    const emailAddress = 'siddhimahadik257@gmail.com';
    const phoneNumber = '8956681803'
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
                                <button className='aboutbtn'><NavLink className="buttonlink" to={"/project"}>Got a project?</NavLink></button>
                            </div>
                        </div>

                    </div>
                    <div className="rightarea">
                        <div className="text">
                            <p>My name is <span>Siddhi Mahadik</span>, and I'm a frontend developer, Final year computer science student and designer. My expertise lies in frontend technologies such as HTML5, CSS3, JavaScript, and React.js. I'm currently expanding my skills by learning Next.js and Framer Motion.</p>
                            <p>I'm enthusiastic about taking on freelance projects, and I'm also open to exploring full-time frontend developer roles. My dedication to creating exceptional user experiences makes me a valuable addition to any team. Let's collaborate to bring your projects to life!
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
                                    <a>Maharastra, India</a>
                                    <a href={`mailto:${emailAddress}`}>siddhimahadik257@gmail.com</a>
                                    <a href={`tel:${phoneNumber}`}>8956681803</a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="lower">
                    <div className="box">
                        <div className="innerdiv1 common">
                            <h3>5+</h3>
                            <span>TECHNOLOGIES</span>
                        </div>
                        <div className="innerdiv2 common">
                            <h3>5+</h3>
                            <span>PROJECTS</span>
                        </div>
                        <div className="innerdiv3 common">
                            <h3>6+</h3>
                            <span>MONTHS PROJECT <br />BASED EXPERIENCE</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;