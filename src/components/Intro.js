import React from 'react';

const INITIAL_ANIMATIONS = ['waiting', 'waiting', 'waiting', 'waiting'];
class Intro extends React.Component {
  state = { animations: ['out', 'in', 'waiting', 'waiting'] };
  componentDidMount() {
    this.animate();
  }
  animate() {
    let inElement = 1;
    let outElement = 0;
    setInterval(() => {
      console.log(this.state.aniamtions);
      let animations = INITIAL_ANIMATIONS;
      animations[inElement] = 'in';
      animations[outElement] = 'out';
      this.setState({ animations });
      inElement = this.incrementIndex(inElement);
      outElement = this.incrementIndex(outElement);
    }, 1500);
  }
  incrementIndex(index) {
    let newIndex;
    if (index > 2) {
      newIndex = 0;
    } else {
      newIndex = index + 1;
    }
    return newIndex;
  }

  handleNavScroll = el => {
    el.scrollIntoView({ behavior: 'smooth' });
  };
  render() {
    return (
      <div className="intro">
        <div className="intro__container--top">
          <div className="intro__container--image">
            {' '}
            <img src="img/profilepic.png" alt="alan buzek" className="intro__image" />
          </div>
          <div className="intro__container--text">
            <div className="intro__nonanimated">Hi, this is Alan.</div>
            <div className="intro__animated">
              I am a passionate&nbsp;
              <div className="intro__animated--container">
                <div className={`intro__animated--text intro__animated--text--1 animated--${this.state.animations[0]}`}>
                  developer
                </div>
                <div className={`intro__animated--text intro__animated--text--2 animated--${this.state.animations[1]}`}>
                  coder
                </div>
                <div className={`intro__animated--text intro__animated--text--3 animated--${this.state.animations[2]}`}>
                  engineer
                </div>
                <div className={`intro__animated--text intro__animated--text--4 animated--${this.state.animations[3]}`}>
                  creator
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="intro__container--bottom">
          <div
            className="intro__button intro__button--1 button"
            onClick={() => this.handleNavScroll(document.getElementById('projects'))}
          >
            Show me portfolio!
          </div>
          <div
            className="intro__button intro__button--2 button"
            onClick={() => this.handleNavScroll(document.getElementById('skills'))}
          >
            What's your skillset?
          </div>
          <div
            className="intro__button intro__button--3 button"
            onClick={() => this.handleNavScroll(document.getElementById('contact'))}
          >
            Let's get in touch.
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
