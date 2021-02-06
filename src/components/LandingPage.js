import React, {useEffect, useState} from 'react';
import Projects from './Projects';
import Intro from './Intro';
import ProjectModal from './ProjectModal';
import About from './About';
import { projectsMap } from '../static/portfolioData';
import { getQueryVariable } from '../helper';
import DocumentHead from './DocumentHead';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation
  } from "react-router-dom";

const LandingPage = () => {
    const [openedModalObject, setOpenedModalObject] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const projectType = getQueryVariable('project');

        if (!projectType) {
            setOpenedModalObject(null);
        };

        const index = getQueryVariable('index') || 0;
        const project = projectsMap[projectType];

        const imageOnly = (project || []).find(project => project.imageOnly);
        setOpenedModalObject({ project , index: parseInt(index, 10), imageOnly, type: projectType });
    }, [location])

    return (
        <main className="landing-page">
            <div className="main">
                <header className="header">
                    <Intro />
                </header>
                <div className="main__location">
                    <i className="material-icons main__location--icon icon">place</i>
                    <div className="main__location--text">Czech Republic</div>
                </div>
            </div>
            <section className="section section__2" id="projects">
                <div className="section__content dark-grey-text">
                    <h1 className="heading heading-1 white-text special-font" id="portfolio">Portfolio</h1>
                    <Projects 
                        openedModalObject={openedModalObject}
                        setOpenedModalObject={setOpenedModalObject}
                    />
                </div>
            </section>
            <section className="section section__1" id="skills">
                <About />
            </section>
            <ProjectModal 
                openedModalObject={openedModalObject}
                setOpe
                nedModalObject={setOpenedModalObject}
            />
        </main>
    );
}

export default LandingPage;
