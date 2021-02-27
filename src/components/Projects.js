import React from 'react';
import portfolioData, { kanataProject } from '../static/portfolioData';
import ReactTooltip from 'react-tooltip';
import { buildQueryParamOfProject } from '../helper';
import { Link, useLocation } from 'react-router-dom';

const Projects = (props) => {
    const { search = ''} = useLocation();

    let selectedCategory = 0;
    if (search.endsWith('painting')){
        selectedCategory = 1;
    } else if (search.endsWith('fashion')){
        selectedCategory = 2;
    }

    return (<div className="dark-grey-text">
        <div style={{ display: 'flex', justifyContent: 'center', fontSize: 15, marginBottom: 45 }}>
            {portfolioData.map((dataCategory, index) => (
                <Link to={index === 0 ? '' : `?category=${dataCategory.name}`} key={index} className={`card-button ${selectedCategory === index ? 'card-button--selected' : ''}`} style={{ textTransform: 'capitalize', color: 'inherit'}}>
                    {dataCategory.name}
                </Link>
            ))}
        </div>
        <ReactTooltip place="top" type="light" effect="solid" delayShow={100} />
        {selectedCategory === 2 && <section class="thumbnails">
            {[kanataProject].map(column => (<div style={{ width: '100%' }}>
                { console.log(column)}
                {column.map(({project, index, imageOnly, type}) => {
                    return (
                    <Link
                        data-tip={project.length > 1 ? `Click to see all ${project.length} images!` : 'Click to see details!'}
                        to={buildQueryParamOfProject(type, index)}
                        >
                        <img src={`/img/${project[index].photo}.jpg`} alt="" />
                        <h3>{project[index].title}</h3>
                    </Link>
                    );
                })}
            </div>))}
        </section>}
        <section class="thumbnails">
            {portfolioData[selectedCategory].content.map(column => (<div>
                {column.map(({project, index, type }) => {
                    return (
                    <Link
                        data-tip={project.length > 1 ? `Click to see all ${project.length} images!` : 'Click to see details!'}
                        to={buildQueryParamOfProject(type, index)}
                        >
                        <img src={`/img/${project[index].photo}.jpg`} alt="" />
                        <h3>{project[index].title}</h3>
                    </Link>
                    );
                })}
            </div>))}
        </section>
      

    </div>);
}

export default Projects;
