import React from 'react';
import { renderTechStack } from './ProjectModal';

const About = () => {


    return (
        <div style={{ maxWidth: 1200 }} className="about">
            <div style={{ display: 'flex' }}>
                <div style={{ flex: '1 0 0' }} className="about__left">
                    <img src={`img/graphics/other/dosha_logo.png`} alt="modal" style={{ width: 300 }}></img>
                    <img src={`img/graphics/other/yulia-lee-logo.jpg`} alt="modal" style={{ width: 300 }}></img>
                </div>
                <div className="about__right">
                    <h2>About me</h2>
                    <p style={{ marginTop: 10 }}>I'm Yulia,from Taipei, Taiwan. I am a senior of fashion design department at Shih Chien Univeristy. I grew up in the town where is famous for indigo dying. It influences me like to try any new ways to create texture or fabric. </p>
                    <p style={{ marginTop: 10 }}>I am constantly striving to improve and learn. I love to travel and enjoys immersing myself into different cultures to explore design possibilities.
                    </p>
                    <h3>Skills</h3>
                    <p style={{ marginTop: 5 }}>I am constantly striving to improve and learn. I love to travel and enjoys immersing myself into different cultures.</p>
                    <div style={{ display: 'flex', marginTop: 5 }}>
                        <img src={`img/icons/ai.png`} alt="modal" className="site-icon" style={{ marginRight: 5, width: 28, height: 28 }}></img>
                        <img src={`img/icons/ps.png`} alt="modal" className="site-icon" style={{ marginRight: 3, width: 28, height: 28 }}></img>
                        {renderTechStack(['Painting', 'Fashion Design', 'Graphic Design', 'Illustration'])}
                    </div>
                    <h3 style={{ marginTop: 20 }}>Contact</h3>
                    <p>
                        Feel free to get in touch with me at{' '}
                        <a href="mailto:alan.buzek@gmail.com">dosha.design@gmail.com</a>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;
