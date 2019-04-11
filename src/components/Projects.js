import React from 'react';

import projectsData from '../static/projectsData';

class Projects extends React.Component {
  renderTechStack(techStack) {
    return techStack.map(tech => {
      return <div className="projects__techstack--tech">{tech}</div>;
    });
  }
  renderProject(project) {
    return (
      <div className="projects__project">
        <div className="heading heading-3 projects__heading">{project.name}</div>
        <img src={`img/projects/${project.img}`} alt={project.name} className="projects__img" />
        <p className="projects__description paragraph-small"> {project.description} </p>
        <div className="projects__techstack">
          <div className="projects__techstack--heading heading heading-4">Utilized:</div>
          <div className="projects__techstack-container">{this.renderTechStack()}</div>
        </div>
      </div>
    );
  }
  renderProjects() {
    return projectsData.map(project => {
      return renderProject(project);
    });
  }
  render() {
    return <div className="projects">{renderProjects()}</div>;
  }
}

export default Projects;
