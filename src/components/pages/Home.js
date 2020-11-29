import React from 'react'
import About from '../About'
import Hero from '../Hero'
import NavMenu from '../NavMenu'
import ProjectBox from '../ProjectBox'
import SideBar from '../SideBar'

function Home({ toggle, open, projects }) {
    return (
        <>
            <SideBar toggle={toggle} open={open} />
            <NavMenu open={open}></NavMenu>
            <Hero />
            <About />
            {projects.map(item =>  (
                <ProjectBox {...item} />
            ))}
            
        </>
    )
}

export default Home
