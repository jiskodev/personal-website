import React from 'react'
import useHover from '../../hooks/useHover'
import { AnimatePresence } from 'framer-motion'
import { HoverBox, LinkBox, LinkContent } from './linkElements'

function OutsideLinkHover({children, path, target}) {
    const [attrs, hovering] = useHover()
    return (
        <>
            <LinkBox href={path} target={target} ref={attrs}>
                <AnimatePresence>
                {hovering && <HoverBox
                    transition={{ ease: "easeOut", duration: 0.5 }}
                    initial={{ x: '-100%' }}
                    animate={{ x: '0%' }}
                    exit={{ x: '100%' }}
                ></HoverBox>}
                </AnimatePresence>
                
                
                <LinkContent>
                {children}
                </LinkContent>
            </LinkBox>
        </>
    )
}

export default OutsideLinkHover


// Crear el link fuera y que la caja lleve solo los children

// Crear el link aqui dentro y que el children sea solo el texto, puede recibir enlaces y demás por props

// Enlace fuera que lleve dentro un div creado aqui