import React, {useState} from 'react';
import Projects from './Projects';
import Intro from './Intro';
import ProjectModal from './ProjectModal';
import About from './About';

const LandingPage = () => {
    const [openedModalObject, setOpenedModalObject] = useState(null);

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
                    <h1 className="heading heading-1 white-text">Portfolio</h1>
                    <Projects 
                        openedModalObject={openedModalObject}
                        setOpenedModalObject={setOpenedModalObject}
                    />
                </div>
            </section>
            <section className="section section__1" id="skills">
                <About />
                {/* <div className="section__content black-text">
                    <h1 className="heading heading-1" id="skills">About me</h1>
                    <p className="paragraph">
                        {' '}
              I'm Yulia,from Taipei, Taiwan. I am a senior of fashion design department at Shih Chien Univeristy. I grew up in the town where is famous for indigo dying. It influences me like to try any new ways to create texture or fabric. I am constantly striving to improve and learn. I love to travel and enjoys immersing myself into different cultures to explore design possibilities. Essentially, I'm a thinker and dreamer at heart. I believe that if I could visualise it, I can make it happen. I aspires to live an authentic life built on courage and kindness.
            </p>
                    <div className="section__1--skills">
                        <div className="skills">
                            <h2 className="skills__heading heading-2 heading">Graphic design</h2>{' '}
                            <ul className="skills__list">
                                <li className="skills__list--element">Adobe Illustrator</li>
                                <li className="skills__list--element">Photoshop</li>
                                <li className="skills__list--element">Visual design</li>
                                <li className="skills__list--element">HTML5</li>
                                <li className="skills__list--element">CSS3 (Flexbox, Grid)</li>
                                <li className="skills__list--element">SASS</li>
                                <li className="skills__list--element">RWD</li>
                                <li className="skills__list--element">AJAX, JSON</li>
                            </ul>
                        </div>
                        <div className="skills">
                            <h2 className="skills__heading heading-2 heading">Merchandising</h2>{' '}
                            <ul className="skills__list">
                                <li className="skills__list--element">Node/Express</li>
                                <li className="skills__list--element">REST</li>
                                <li className="skills__list--element">MongoDB</li>
                                <li className="skills__list--element">MySQL</li>
                            </ul>
                        </div>
                        <div className="skills">
                            <h2 className="skills__heading heading-2 heading">Fashion design</h2>{' '}
                            <ul className="skills__list">
                                <li className="skills__list--element">Webpack</li>
                                <li className="skills__list--element">Babel</li>
                                <li className="skills__list--element">Adobe PS</li>
                                <li className="skills__list--element">Heroku</li>
                                <li className="skills__list--element">OAuth 2.0</li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </section>
            <ProjectModal 
                openedModalObject={openedModalObject}
                setOpenedModalObject={setOpenedModalObject}
            />
        </main>
    );
}

export default LandingPage;
