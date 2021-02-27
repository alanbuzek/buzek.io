import React from 'react';
import { renderTechStack } from './ProjectModal';

const About = () => {


    return (
        <div style={{ maxWidth: 1200 }} className="about">
            <div style={{ display: 'flex' }}>
                <div style={{ flex: '1 0 0' }} className="about__left">
                    <img src={`/img/graphics/other/dosha_logo.png`} alt="modal" style={{ width: 300 }}></img>
                    <img src={`/img/graphics/other/yulia-lee-logo.jpg`} alt="modal" style={{ width: 300 }}></img>
                </div>
                <div className="about__right">
                    <h3>About me</h3>
                    <p style={{ marginTop: 10 }}>This is Yulia. I am born in Taiwan, now based in Europe.
                        I am a creative. I can never seem to stop creating anything. There is always an idea, new picture, or some business idea running through my head. I cannot help but see a picture before I see words on it. I am drawn to color and the beauty around me. I have always been drawn to art and design. 
                    </p>
                    <p style={{ marginTop: 10 }}>
                    “Dosha” means “thank you” in Taiwanese. I am grateful that I could immerse myself into different cultures and turn the virtual inspiration turns into interesting graphics.
                    </p>
                    <h3>Skills</h3>
                    <p style={{ marginTop: 5 }}>I am a dynamic fashion and graphic designer professional with a background in fashion design and production development experience. I am constantly striving to improve and learn. 
                        Mainly professional in Adobe Photoshop and Illustration, including hand sketching, drawing, and watercolor. I have kept exploring the skill in CLO. 
                        </p>
                    <div style={{ display: 'flex', marginTop: 5 }}>
                        {renderTechStack(['Painting', 'Fashion Design', 'Graphic Design', 'Illustration'])}
                    </div>
                    <div style={{ display: 'flex', marginTop: 5, paddingLeft: 5 }}>
                        <img src={`/img/icons/ai.png`} alt="modal" className="site-icon" style={{ marginRight: 5, width: 28, height: 28 }}></img>
                        <img src={`/img/icons/ps.png`} alt="modal" className="site-icon" style={{ marginRight: 3, width: 28, height: 28 }}></img>
                    </div>
                    <h3 style={{ marginTop: 20 }}>Contact</h3>
                    <p>
                        Feel free to get in touch with me at{' '}
                        <a href="mailto:dosha.official@gmail.com">dosha.official@gmail.com</a> and follow my Instagram account <a href="https://instagram.com/dosha.design">@dosha.design</a>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;
