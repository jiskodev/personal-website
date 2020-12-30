import React from 'react'
import { useParams } from 'react-router-dom'
import TransitionContainer from '../../components/TransitionContainer'
import ProjectView from './ProjectView'

function Project({ projects, open }) {
    const { handle } = useParams()
    const currentProject = projects.find(item => item.to === handle)

    return (
        <>
            <TransitionContainer />
            <ProjectView {...currentProject}></ProjectView>
        </>
    )
}

export default Project
