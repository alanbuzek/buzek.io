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
          <a
            className="main__resume"
            href="https://drive.google.com/file/d/1Lkrza7JpUVhq3ZbZdNBdps9OZusWWAof/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            See Résumé
          </a>
        </div>

        <section className="section section__2" id="projects">
          <div className="section__content dark-grey-text">
            <h1 className="heading heading-1 white-text">Projects</h1>
            <Projects />
          </div>
        </section>
        <section className="section section__1" id="skills">
          <div className="section__content black-text">
            <h1 className="heading heading-1"> Technical skills</h1>
            <p className="paragraph">
              {' '}
              I am a full-stack developer proficient in HTML5, CSS3 and JavaScript in both the front-end (React.js) and
              back-end (Node.js). I have experience working with both NoSQL and SQL databases in the form of MongoDB and
              MySQL and am always looking to expand my skill set.
            </p>
            <div className="section__1--skills">
              <div className="skills">
                <h2 className="skills__heading heading-2 heading">Front-end</h2>{' '}
                <ul className="skills__list">
                  <li className="skills__list--element">JavaScript (ES6+)</li>
                  <li className="skills__list--element">React.js (Redux)</li>
                  <li className="skills__list--element">HTML5</li>
                  <li className="skills__list--element">CSS3 (Flexbox, Grid)</li>
                  <li className="skills__list--element">SASS</li>
                  <li className="skills__list--element">RWD</li>
                  <li className="skills__list--element">AJAX, JSON</li>
                </ul>
              </div>
              <div className="skills">
                <h2 className="skills__heading heading-2 heading">Back-end</h2>{' '}
                <ul className="skills__list">
                  <li className="skills__list--element">Node/Express</li>
                  <li className="skills__list--element">REST</li>
                  <li className="skills__list--element">MongoDB</li>
                  <li className="skills__list--element">MySQL</li>
                  <li className="skills__list--element">PassportJS</li>
                </ul>
              </div>
              <div className="skills">
                <h2 className="skills__heading heading-2 heading">Other</h2>{' '}
                <ul className="skills__list">
                  <li className="skills__list--element">Webpack</li>
                  <li className="skills__list--element">Babel</li>
                  <li className="skills__list--element">Adobe PS</li>
                  <li className="skills__list--element">Heroku</li>
                  <li className="skills__list--element">OAuth 2.0</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="section section__3" id="contact">
          <div className="section__content">
            <div className="section__heading heading heading-2">Contact me</div>
            <div className="section__3--email">
              I'm currently seeking a new professional opportunity in Taipei, Taiwan. <br /> Feel free to get in touch
              at <a href="mailto:alan.buzek@gmail.com">alan.buzek@gmail.com</a>.
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default LandingPage;
