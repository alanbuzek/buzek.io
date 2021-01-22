import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        overflow: 'hidden',
        padding: 0,
    }
};

export const renderTechStack = techStack => {
    return techStack.map(tech => {
        return (
            <div key={tech} className="projects__techstack--tech button button--small stack">
                {tech}
            </div>
        );
    });
}

const ProjectModal = ({ openedModalObject, setOpenedModalObject }) => {
    function closeModal() {
        setOpenedModalObject(null);
    }

    

    return (
        <Modal
            isOpen={!!openedModalObject}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div style={{ display: 'flex' }}>
                <img src={`img/projects/${openedModalObject}.jpg`} alt="modal" style={{ width: "50%", height: "100%", flex: '1.6 0 0' }}>
                </img>
                <div className="projectModal__right">
                    <h2>The Project Name</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                    {renderTechStack(['Adobe Illustrator', 'Sketch', 'Photoshop', 'Painting'])}
                    <div style={{ display: 'flex', marginTop: 10 }}>
                        <img src={`img/projects/ai-logo.png`} alt="modal" className="site-icon" style={{ marginRight: 5 }}></img>
                        <img src={`img/projects/ps-logo.png`} alt="modal" className="site-icon"></img>
                    </div>
                </div>
            </div>
            <img src="img/close-icon.png" className="site-icon"  style={{ position: 'absolute', top: 10, right: 10, cursor: 'pointer'}} alt="close modal" onClick={closeModal}></img>
        </Modal>
    );
}

export default ProjectModal;
