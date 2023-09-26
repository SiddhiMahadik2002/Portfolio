import { Sidebar } from "../../component/Sidebar/Sidebar";
import './project.css'
import projectData from '../../../src/data/project.data.js'
import { NavLink } from "react-router-dom";


const Project = () => {

    
    return (
        <div className="main">
            <Sidebar />
            <div className="project scrollableDiv">
                <div className="div1">
                    <p>-PROJECTS</p>
                    <h3>Recent completed works</h3>
                </div>
                <div className="project_grid">
                    {projectData.map((item) => (
                        <div className="singleProject">

                            <div className="innerDiv1">
                                <img src={`/imgs/${item.img}`} alt="" />
                            </div>
                            <div className="info_project">
                                <div className="innerDiv2">
                                    <h3>{item.projectName} </h3>
                                    <p>{(item.description).length<20? `${item.description}` :`${(item.description).substring(0,110)}...`}
                                    </p>
                                </div>
                                <div className="innerDiv3">
                                  <NavLink   target='_blank' to={item.link} ><button className="chkproject">{item.label}</button></NavLink>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default Project;


