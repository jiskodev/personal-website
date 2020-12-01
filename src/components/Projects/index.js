import React from 'react'
import ProjectBox from '../ProjectBox'

function Projects({ projects }) {
    return (
        <div id='projects'>
            {projects.map(item =>  (
                <ProjectBox {...item} />
            ))}
        </div>
    )
}

export default Projects
