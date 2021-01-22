import React, { useState } from 'react';

const data = [
    {
        name: 'Graphics',
        content: [
            ['pantone-1', 'card-1', 'pantone-3', 'yulia-lee-logo', 'ig-5'],
            ['nameday-2', 'christmas-2', 'ig-3', 'nameday-1', 'pantone-2', 'image--031'],
            ['christmas-3', '07', 'christmas-1', 'card-2', 'colors-1']
        ]
    },
    {
        name: 'Painting',
        content: [
            ['taipei-1', 'postcard-4', 'rabbit', 'postcard-5'],
            ['ig-2', 'ig-3', 'ig-5', 'postcard-2'],
            ['postcard-1', 'colors-1', '05', 'image--015']
        ]
    },
    {
        name: 'Fashion',
        content: [
            ['image--015'],
            [],
            []
        ]
    }
]

const Projects = (props) => {
    const { setOpenedModalObject } = props;
    const [selectedCategory, setSelectedCategory] = useState(0);

    return (<div className="dark-grey-text">
        <div style={{ display: 'flex', justifyContent: 'center', fontSize: 15, marginBottom: 45 }}>
            {data.map((dataCategory, index) => (
                <div className={`card-button ${selectedCategory === index ? 'card-button--selected' : ''}`} onClick={() => setSelectedCategory(index)}>
                    {dataCategory.name}
                </div>
            ))}
        </div>
        <section class="thumbnails">
            {data[selectedCategory].content.map(column => (<div>
                {column.map(project => (
                    <a
                        href="/"
                        onClick={e => {
                            e.preventDefault();
                            setOpenedModalObject(project);
                        }}>
                        <img src={`img/projects/${project}.jpg`} alt="" />
                        <h3>Lorem ipsum dolor sit amet</h3>
                    </a>))}
            </div>))}
        </section>

    </div>);
}

export default Projects;
