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
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink>Projects</NavLink>
                <NavLink>GitHub</NavLink>
                <NavLink>Contact</NavLink>
            </div>
            <button>Get my Resume</button>
        </div>
    )
}