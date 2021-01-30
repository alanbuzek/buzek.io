import React, { useState } from 'react';
import portfolioData from '../static/portfolioData';
import ReactTooltip from 'react-tooltip';

const Projects = (props) => {
    const { setOpenedModalObject } = props;
    const [selectedCategory, setSelectedCategory] = useState(0);

    return (<div className="dark-grey-text">
        <div style={{ display: 'flex', justifyContent: 'center', fontSize: 15, marginBottom: 45 }}>
            {portfolioData.map((dataCategory, index) => (
                <div className={`card-button ${selectedCategory === index ? 'card-button--selected' : ''}`} onClick={() => setSelectedCategory(index)}>
                    {dataCategory.name}
                </div>
            ))}
        </div>
        <ReactTooltip place="top" type="dark" effect="solid" delayShow={100} />
        <section class="thumbnails">
            {portfolioData[selectedCategory].content.map(column => (<div>
                {column.map(({project, index}) => {
                    console.log(project, index);
                    return (
                        <>
                    <a
                        data-tip={project.length > 1 ? `Click to see all ${project.length} images!` : 'Click to see details!'}
                        href="/"
                        onClick={e => {
                            e.preventDefault();
                            setOpenedModalObject({project, index});
                        }}>

                        <img src={`img/${project[index].photo}.jpg`} alt="" />
                        <h3>{project[index].title}</h3>
                    </a>
                    </>
                    );
                })}
            </div>))}
        </section>

    </div>);
}

export default Projects;
