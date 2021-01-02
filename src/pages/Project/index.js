import React from 'react'
import { useParams } from 'react-router-dom'
import TransitionContainer from '../../components/TransitionContainer'
import ProjectView from './ProjectView'
import UndefinedProject from './UndefinedProject'

function Project({ projects, open }) {
    const { handle } = useParams()
    const currentProject = projects.find(item => item.to === handle)

    const projectExists = currentProject !== undefined

    return (
        <>
            <TransitionContainer />
            {projectExists ? <ProjectView {...currentProject} /> : <UndefinedProject handle={handle} />}
            
        </>
    )
}

export default Project
