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
                <h2>Siddhi Mahadik</h2>
            </div>
            <div
                onClick={openMenu} className="menuToggle"
            ><i class="fi fi-br-menu-burger"></i>
            </div>
  
            

            {
             isMenuOpen? <div className="mobileMainMenu">
                <div className="closeMenu" onClick={closeMenu}><i class="fi fi-br-cross"></i></div>
                <div className="mmenu">
                <p className="menulink" onClick={redirectHome}>Home</p>
                <p className="menulink"  onClick={redirectAbout}>About</p>
                <p className="menulink"  onClick={redirectProject}>Projects</p>
                 <NavLink className="menulink" to={"https://github.com/siddhimahadik2002"} target='_blank'>GitHub</NavLink>
                <p  className="menulink" onClick={redirectContact} to={"/contact"}>Contact</p>
                <NavLink className="menulink" to={"https://linkedin.com/in/siddhi-mahadik-470092212"} target='_blank'>LinkedIn</NavLink>
                </div>
                <button className='mresumebtn'>
            <NavLink className="buttonlink" to={"https://drive.google.com/file/d/1H_RuWMR31bDQGOKrSGxaeUuiV2ijl_-2/view?usp=drivesdk"} target='_blank'>Get my Resume</NavLink></button>
            </div>:null

            }

        </div>
    );
};

export default MobileHeader;
