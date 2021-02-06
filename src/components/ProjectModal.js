import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { buildQueryParamOfProject } from '../helper';

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
    if (!openedModalObject) {
        return null;
    }

    const { index, imageOnly, type } = openedModalObject;
    let { project } = openedModalObject;
    console.log(openedModalObject);

    const [projectIndex, setProjectIndex] = useState(index);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        window.history.pushState({}, document.title, buildQueryParamOfProject(type, projectIndex, imageOnly));
        document.title = project[projectIndex].title + " - dosha.design";
        document.querySelector('meta[name="description"]').setAttribute("content", (project[projectIndex].description || []).join(' '));
        document.querySelector('meta[property="og:url"]').setAttribute("content", window.location.href);
        document.querySelector('meta[property="og:title"]').setAttribute("content", project[projectIndex].title + " - dosha.design");
        document.querySelector('meta[property="og:image"]').setAttribute("content", `${window.location.origin}/img/${project[projectIndex].photo}.jpg`);
        document.querySelector('meta[property="og:description"]').setAttribute("content", (project[projectIndex].description || []).join(' '));
    }, [projectIndex])

    function closeModal() {
        window.history.pushState({}, document.title, "/");
        setOpenedModalObject(null);
        setProjectIndex(0);

        // cleanup head
        document.title = `dosha.design - Yulia Lee's graphic design brand`;
        document.querySelector('meta[name="description"]').setAttribute("content",`My personal graphic design brand. Check out my work!`);
        document.querySelector('meta[property="og:url"]').setAttribute("content", 'https://dosha.design');
        document.querySelector('meta[property="og:title"]').setAttribute("content",`My personal graphic design brand. Check out my work!`);
        document.querySelector('meta[property="og:image"]').setAttribute("content", `https://dosha.design/img/graphics/other/og-image.png`);
        document.querySelector('meta[property="og:description"]').setAttribute("content", `My personal graphic design brand. Check out my work!`);
    }

    function handlePhotoClick() {
        setCopied(false);
        if (projectIndex + 1 === project.length) {
            setProjectIndex(0);
        } else {
            setProjectIndex(projectIndex + 1);
        }
    }

    function handlePhotoClickBack() {
        setCopied(false);
        if (projectIndex === 0) {
            setProjectIndex(project.length - 1);
        } else {
            setProjectIndex(projectIndex - 1);
        }
    }

    if (imageOnly) {
        project = project.slice(1);
    }


    const projectAtCurrIndex = project[projectIndex];
    return (
        <Modal
            isOpen={!!openedModalObject}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"

        >
            <div style={{ display: 'flex' }}>
                <img src={`img/${projectAtCurrIndex.photo}.jpg`} alt="modal" style={{ width: "50%", height: "100%", flex: '1.6 0 0' }}>
                </img>
                {project.length > 1 && <img src={`img/icons/right-arrow.png`} alt="modal" className={`right-arrow ${imageOnly ? 'imageOnly' : ''}`} onClick={() => handlePhotoClick()}></img>}
                {project.length > 1 && <img src={`img/icons/right-arrow.png`} alt="modal" className="left-arrow" onClick={() => handlePhotoClickBack()}></img>}

                {project.length > 1 && <div className="modal_index">{`${projectIndex + 1}/${project.length}`}</div>}
                {!imageOnly && <div className="projectModal__right">
                    <h2 style={{ paddingRight: 20 }}>{projectAtCurrIndex.title}</h2>
                    {projectAtCurrIndex.description.map(text => <p style={{ marginBottom: 5 }}>{text}</p>)}
                    {renderTechStack(projectAtCurrIndex.tags)}
                    <div style={{ display: 'flex', marginTop: 10, marginLeft: 3 }}>
                        {projectAtCurrIndex.icons.map(icon =>
                            <img src={`img/icons/${icon}.png`} alt="modal" className="tech-icon" style={{ marginRight: 10 }}></img>)}
                    </div>

                </div>}
            </div>
            <img src="img/icons/close-icon.png" className="site-icon" style={{ position: 'absolute', top: 10, right: 10, cursor: 'pointer' }} alt="close modal" onClick={closeModal}></img>
            <CopyToClipboard text={`${window.location.origin}${buildQueryParamOfProject(type, projectIndex, imageOnly)}`}
                onCopy={() => setCopied(true)} style={{ marginTop: 'auto', position: 'absolute', bottom: 10, right: 10, cursor: 'pointer', fontSize: '1.5rem' }}>
                {copied ? <div style={{ fontSize: 15 }}>Link copied!</div> : <img src="img/icons/clipboard.png" className="site-icon" style={{ position: 'absolute', bottom: 10, right: 10, }} alt="close modal"></img>}
            </CopyToClipboard>
        </Modal>
    );
}

export default ProjectModal;
