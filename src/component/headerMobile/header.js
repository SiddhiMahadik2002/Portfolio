import { useState } from "react";
import "./header.css";
import { NavLink, useNavigate } from "react-router-dom";

const MobileHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate =useNavigate()
    const openMenu=()=>{
            setIsMenuOpen(true)

    }

    const closeMenu=()=>{
        setIsMenuOpen(false)
    }
    
    
    const redirectHome=()=>{
        setIsMenuOpen(false)
        navigate("/")
    }
    const redirectAbout=()=>{
        setIsMenuOpen(false)
        navigate("/about")
    }
    const redirectProject=()=>{
        setIsMenuOpen(false)
        navigate("/project")
    }
    
    
    const redirectContact=()=>{
        setIsMenuOpen(false)
        navigate("/contact")
    }




    return (
        <div className={`mobileHeader`}>
            <div className="myname">
                <h3>Siddhi Mahadik</h3>
            </div>
            <button
                onClick={openMenu} className="menuToggle"
            >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </button>
  
            

            {
             isMenuOpen? <div className="mobileMainMenu">
                <div className="closeMenu" onClick={closeMenu}><i class="fi fi-br-cross"></i></div>
                <div className="menu">
                <p className="menulink" onClick={redirectHome}>Home</p>
                <p className="menulink"  onClick={redirectAbout}>About</p>
                <p className="menulink"  onClick={redirectProject}>Projects</p>
                 <NavLink className="menulink" to={"https://github.com/siddhimahadik2002"} target='_blank'>GitHub</NavLink>
                <p  className="menulink" onClick={redirectContact} to={"/contact"}>Contact</p>
                </div>
                <button className='resumebtn'>
            <NavLink className="buttonlink" to={"https://drive.google.com/file/d/1H_RuWMR31bDQGOKrSGxaeUuiV2ijl_-2/view?usp=drivesdk"} target='_blank'>Get my Resume</NavLink></button>
            </div>:null

            }

        </div>
    );
};

export default MobileHeader;
