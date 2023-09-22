import { Sidebar } from "../../component/Sidebar/Sidebar";
import './project.css'

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
                    <div className="singleProject">
                        <div className="innerDiv1">
                            <img src="https://merahulnikam.web.app/static/media/healthassist.10082f54.jpg" alt="" />
                        </div>
                        <div className="info_project">
                            <div className="innerDiv2">
                                <h3>Siddhi's Kitchen</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem tempora fuga, ducimus soluta dicta molestiae quae tenetur ab maiores odio.</p>
                            </div>
                            <div className="innerDiv3">
                                <button>Check Project</button>
                            </div>
                        </div>

                    </div>
                    <div className="singleProject">
                        <div className="innerDiv1">
                            <img src="https://merahulnikam.web.app/static/media/Vaccines-Near-Me-project.4eddc5ff.png" alt="" />
                        </div>
                        <div className="info_project">
                            <div className="innerDiv2">
                                <h3>NewzNetwork | HTML5, CSS3, JavaScript, NewsAPI</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem tempora fuga, ducimus soluta dicta molestiae quae tenetur ab maiores odio.</p>
                            </div>
                            <div className="innerDiv3">
                                <button>Check Project</button>
                            </div>
                        </div>

                    </div>
                    <div className="singleProject">
                        <div className="innerDiv1">
                            <img src="https://merahulnikam.web.app/static/media/healthassist.10082f54.jpg" alt="" />
                        </div>
                        <div className="info_project">
                            <div className="innerDiv2">
                                <h3>Plant Mart </h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem tempora fuga, ducimus soluta dicta molestiae quae tenetur ab maiores odio.</p>
                            </div>
                            <div className="innerDiv3">
                                <button>Check Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;