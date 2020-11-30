import React from 'react'
import { useParams } from 'react-router-dom'
import ProjectView from '../ProjectView'

function ProjectPage({ projects, toggle, open }) {
    const { handle } = useParams()
    const currentProject = projects.find(item => item.to === handle)

    return (
        <>
            <ProjectView {...currentProject}></ProjectView>
        </>
    )
}

export default ProjectPage
