import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
 
const images = [
  'img/projects/01.jpg',
  'img/projects/02.jpg',
  'img/projects/03.jpg',
  'img/projects/05.jpg',
  'img/projects/06.jpg',
  'img/projects/07.jpg',
  'img/projects/08.jpg',
];
 
export default class LightboxExample extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
 
  render() {
    const { photoIndex, isOpen } = this.state;
    const { project, nextImg } = this.props;
    
    return (
      <div>
        <div className="projects__project" key={project.name}>
        <div className="heading heading-3 projects__heading">{project.name}</div>
        <div className="projects__img--container" onClick={() => this.setState({ isOpen: true })}>
          <img src={`img/projects/${project.img}`} alt={project.name} className="projects__img" />
          {nextImg && <img src={`img/projects/${nextImg}`} alt={project.name} className="projects__img projects__img--second" />}
          {/* {nextNextImg && <img src={`img/projects/${nextNextImg}`} alt={project.name} className="projects__img projects__img--third" />} */}
        </div>
        <p className="projects__description paragraph-small"> {project.description} </p>
        <div className="projects__status">
          {project.status}{' '}
          <a className="project__status--live button button--highlighted" href={project.link} target="_blank" rel="noopener noreferrer">
            See Live
          </a>
        </div>
        {/* <div className="projects__code">
          Code:{' '}
          {project.codeLink ? (
            <React.Fragment>
              See on&nbsp;
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </React.Fragment>
          ) : (
              'Closed Source'
            )}
        </div> */}
        <div className="projects__techstack">
          {/* <div className="projects__techstack--heading heading heading-4">Tech Stack:</div> */}
          {/* <div className="projects__techstack--container">{this.renderTechStack(project.techStack)}</div> */}
        </div>
      </div>
 
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
