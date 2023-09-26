import { NavLink } from 'react-router-dom'
import './Sidebar.css'
export const Sidebar = () => {
    return (
        <div className="left">
            <div className="info">
                <img src="https://media.licdn.com/dms/image/C5603AQEVOY_esXCjDQ/profile-displayphoto-shrink_800_800/0/1660486102148?e=2147483647&v=beta&t=b10MeZxPFVu2olAiB8ZVyC83a3ESUnO4-xZdBbCYV6E" alt="" />
                <p>Siddhi Mahadik</p>
            </div>
            <div className="menu">
                <NavLink className="menulink" to={"/"}>Home</NavLink>
                <NavLink  className="menulink" to={"/about"}>About</NavLink>
                <NavLink  className="menulink" to={"/project"}>Projects</NavLink>
                <NavLink  className="menulink" to={"https://github.com/siddhimahadik2002"} target='_blank'>GitHub</NavLink>
                <NavLink  className="menulink" to={"/contact"}>Contact</NavLink>
            </div>
            <button className='resumebtn'>
            <NavLink className="buttonlink" to={"https://drive.google.com/file/d/1H_RuWMR31bDQGOKrSGxaeUuiV2ijl_-2/view?usp=drivesdk"} target='_blank'>Get my Resume</NavLink></button>
        </div>
    )
}