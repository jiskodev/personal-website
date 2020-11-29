import React from 'react'
import { useParams } from 'react-router-dom'
import SideBar from '../SideBar'
import NavMenu from '../NavMenu'
import ProjectView from '../ProjectView'

function ProjectPage({ projects, toggle, open }) {
    const { handle } = useParams()
    const currentProject = projects.find(item => item.to === handle)

    return (
        <>
            <SideBar toggle={toggle} open={open} />
            <NavMenu open={open}></NavMenu>
            <ProjectView {...currentProject}></ProjectView>
        </>
    )
}

export default ProjectPage
