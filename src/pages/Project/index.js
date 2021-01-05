import React from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProjectView from './ProjectView'
import UndefinedProject from './UndefinedProject'

const pageVariants = {
    initial: {
        opacity: 0,
        y: -100,
    },
    in: {
        opacity: 1,
        y: 0,
    },
    out: {
        opacity: 0,
        y: 100,
    },
    }

    const pageTransition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

function Project({ projects }) {
    const { handle } = useParams()
    const currentProject = projects.find(item => item.to === handle)

    const projectExists = currentProject !== undefined

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            
            {projectExists ? <ProjectView {...currentProject} /> : <UndefinedProject handle={handle} />}
            
        </motion.div>
    )
}

export default Project
