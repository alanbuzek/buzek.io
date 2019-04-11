import React from 'react';

import projectsData from '../static/projectsData';

class Projects extends React.Component {
  renderTechStack(techStack) {
    return techStack.map(tech => {
      return <div className="projects__techstack--tech button button-small">{tech}</div>;
    });
  }
  renderProject(project) {
    return (
      <div className="projects__project">
        <div className="heading heading-3 projects__heading">{project.name}</div>
        <img src={`img/projects/${project.img}`} alt={project.name} className="projects__img" />
        <p className="projects__description paragraph-small"> {project.description} </p>
        <div className="projects__status">
          {project.status}{' '}
          <a className="project__status--live button" href={project.link} target="_blank" rel="noopener noreferrer">
            See live
          </a>
        </div>
        <div className="projects__code">
          Code:{' '}
          {project.codeLink ? (
            <React.Fragment>
              See on&nbsp;
              <a href={project.codeLink} target="_blank">
                Github
              </a>
            </React.Fragment>
          ) : (
            'Closed Source'
          )}
        </div>
        <div className="projects__techstack">
          <div className="projects__techstack--heading heading heading-4">Tech Stack:</div>
          <div className="projects__techstack--container">{this.renderTechStack(project.techStack)}</div>
        </div>
      </div>
    );
  }
  renderProjects() {
    return projectsData.map(project => {
      return this.renderProject(project);
    });
  }
  render() {
    return <div className="projects dark-grey-text">{this.renderProjects()}</div>;
  }
}

export default Projects;
