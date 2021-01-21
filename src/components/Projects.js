import React from 'react';

import projectsData from '../static/projectsData';
import ImageGallery from './ImageGallery';
class Projects extends React.Component {
    renderTechStack(techStack) {
        return techStack.map(tech => {
            return (
                <div key={tech} className="projects__techstack--tech button button--small">
                    {tech}
                </div>
            );
        });
    }
    renderProject(project, nextImg, nextNextImg) {
        return <ImageGallery project={project} nextImg={nextImg} />;
    }
    renderProjects() {
        return projectsData.map((project, idx) => {
            return this.renderProject(project, (projectsData[idx + 1] || {}).img, (projectsData[idx + 2] || {}).img);
        });
    }
    render() {
        return (<div className="dark-grey-text">
            <section class="thumbnails">
                <div>
                    <a href="images/fulls/masterlingo.png">
                        <img src="img/projects/pantone-1.jpg" alt="" />
                        <h3>Lorem ipsum dolor sit amet</h3>
                    </a>
                    <a href="images/fulls/02.jpg">
                        <img src="img/projects/card-1.jpg" alt="" />
                        <h3>Lorem ipsum dolor sit amet</h3>
                    </a>
                    <a href="images/fulls/05.jpg">
                        <img src="img/projects/pantone-3.jpg" alt="" />
                        <h3>Lorem ipsum dolor sit amet</h3>
                    </a>
                </div>
                <div>
                    <a href="images/fulls/05.jpg">
                        <img src="img/projects/nameday-2.jpg" alt="" />
                        <h3>Lorem ipsum dolor sit amet</h3>
                    </a>
                    <a href="images/fulls/03.jpg">
                        <img src="img/projects/christmas-2.jpg" alt="" />
                        <h3>Lorem ipsum dolor sit amet</h3>
                    </a>
                    <a href="images/fulls/05.jpg">
                        <img src="img/projects/nameday-1.jpg" alt="" />
                        <h3>Lorem ipsum dolor sit amet</h3>
                    </a>
                    <a href="images/fulls/05.jpg">
                        <img src="img/projects/pantone-2.jpg" alt="" />
                        <h3>Lorem ipsum dolor sit amet</h3>
                    </a>
                </div>
                <div>
                    <a href="images/fulls/06.jpg">
                        <img src="img/projects/christmas-3.jpg" alt="" />
                        <h3>Lorem ipsum dolor sit amet</h3>
                    </a>
                    <a href="images/fulls/07.jpg">
                        <img src="img/projects/07.jpg" alt="" />
                        <h3>Lorem ipsum dolor sit amet</h3>
                    </a>
                    <a href="images/fulls/05.jpg">
                        <img src="img/projects/christmas-1.jpg" alt="" />
                        <h3>Lorem ipsum dolor sit amet</h3>
                    </a>
                </div>
            </section>

        </div>);
    }
}

export default Projects;
