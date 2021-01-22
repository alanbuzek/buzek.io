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
    if (!openedModalObject){
        return null;
    }

    const [photoIndex, setPhotoIndex] = useState(0);

    function closeModal() {
        setOpenedModalObject(null);
        setPhotoIndex(0);
    }

    function handlePhotoClick() {
        if (photoIndex + 1 === openedModalObject.photos.length){
            setPhotoIndex(0);
        } else {
            setPhotoIndex(photoIndex + 1);
        }
    }

    function handlePhotoClickBack() {
        if (photoIndex === 0){
            setPhotoIndex(openedModalObject.photos.length - 1);
        } else {
            setPhotoIndex(photoIndex - 1);
        }
    }


    console.log(photoIndex);

    return (
        <Modal
            isOpen={!!openedModalObject}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div style={{ display: 'flex' }}>
                <img src={`img/projects/${openedModalObject.photos[photoIndex]}.jpg`} alt="modal" style={{ width: "50%", height: "100%", flex: '1.6 0 0' }}>
                </img>
                {openedModalObject.photos.length > 1 && <img src={`img/projects/right-arrow.png`} alt="modal" className="right-arrow" onClick={() => handlePhotoClick()}></img>}
                {openedModalObject.photos.length > 1 && <img src={`img/projects/right-arrow.png`} alt="modal" className="left-arrow" onClick={() => handlePhotoClickBack()}></img>}
                <div className="projectModal__right">
                    <h2 style={{ paddingRight: 20 }}>{openedModalObject.title}</h2>
                    {openedModalObject.description.map(text => <p>{text}</p>)}
                    {renderTechStack(['Adobe Illustrator', 'Sketch', 'Photoshop', 'Painting'])}
                    <div style={{ display: 'flex', marginTop: 10 }}>
                        <img src={`img/projects/ai-logo.png`} alt="modal" className="site-icon" style={{ marginRight: 5 }}></img>
                        <img src={`img/projects/ps-logo.png`} alt="modal" className="site-icon"></img>
                    </div>
                </div>
            </div>
            <img src="img/projects/close-icon.png" className="site-icon"  style={{ position: 'absolute', top: 10, right: 10, cursor: 'pointer'}} alt="close modal" onClick={closeModal}></img>
        </Modal>
    );
}

export default ProjectModal;
