import React, { useEffect, useState } from 'react';
import portfolioData, { kanataProject } from '../static/portfolioData';
import ReactTooltip from 'react-tooltip';
import { buildQueryParamOfProject, getQueryVariable } from '../helper';
import { Link } from 'react-router-dom';

const Projects = (props) => {
    const { setOpenedModalObject } = props;
    const [selectedCategory, setSelectedCategory] = useState(0);

    useEffect(() => {
        const category = getQueryVariable('category');
        if (category){
            setSelectedCategory(parseInt(category, 10));
        }
    }, [])

    return (<div className="dark-grey-text">
        <div style={{ display: 'flex', justifyContent: 'center', fontSize: 15, marginBottom: 45 }}>
            {portfolioData.map((dataCategory, index) => (
                <div className={`card-button ${selectedCategory === index ? 'card-button--selected' : ''}`} onClick={() => setSelectedCategory(index)}>
                    {dataCategory.name}
                </div>
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
