import { useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

const MobileHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const openMenu=()=>{
            setIsMenuOpen(true)

    }

    const closeMenu=()=>{
        setIsMenuOpen(false)
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
                <div className="closeMenu" onClick={closeMenu}>X</div>
                <div className="mobileMenuItems">
                    <h3>Home</h3>
                    <h3>About</h3>
                    <h3>Contact</h3>
                </div>
            </div>:null

            }

        </div>
    );
};

export default MobileHeader;
