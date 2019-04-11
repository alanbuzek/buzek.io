import React from 'react';
import Projects from './Projects';
import Intro from './Intro';

class LandingPage extends React.Component {
  render() {
    return (
      <main className="landing-page">
        <div className="main">
          <header className="header">
            <Intro />
          </header>
          <div className="main__location">
            <i className="material-icons main__location--icon icon">place</i>
            <div className="main__location--text">Taipei City, Taiwan</div>
          </div>
        </div>
        <section className="section section__1">
          <div className="section__content black-text">
            <h1 className="heading heading-1"> Technical skills</h1>
            <p className="paragraph">
              {' '}
              I am a full-stack developer currently proficient in HTML5, CSS3 and Javascript in both the front-end
              (React.js) and back-end (Node.js). Furthermore, I have experience working with both NoSQL and SQL
              databases in the form of MongoDB and MySQL and am always looking to expand my skill set.
            </p>
            <div className="section__1--skills">
              <div className="skills">
                <h2 className="skills__heading heading-2 heading">Front-end</h2>{' '}
                <ul className="skills__list">
                  <li className="skills__list--element">Javascript (ES6+)</li>
                  <li className="skills__list--element">React.js (Redux)</li>
                  <li className="skills__list--element">HTML5</li>
                  <li className="skills__list--element">CSS3 (Flexbox, Grid)</li>
                  <li className="skills__list--element">SASS</li>
                  <li className="skills__list--element">RWD</li>
                </ul>
              </div>
              <div className="skills">
                <h2 className="skills__heading heading-2 heading">Back-end</h2>{' '}
                <ul className="skills__list">
                  <li className="skills__list--element">Node/Express</li>
                  <li className="skills__list--element">REST</li>
                  <li className="skills__list--element">MongoDB</li>
                  <li className="skills__list--element">MySQL</li>
                </ul>
              </div>
              <div className="skills">
                <h2 className="skills__heading heading-2 heading">Others</h2>{' '}
                <ul className="skills__list">
                  <li className="skills__list--element">Webpack</li>
                  <li className="skills__list--element">Babel</li>
                  <li className="skills__list--element">Adobe Suite</li>
                  <li className="skills__list--element">Heroku</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="section section__2">
          <div className="section__content">
            <h1 className="heading heading-1">Projects</h1>
            <Projects />
          </div>
        </section>
      </main>
    );
  }
}

export default LandingPage;
