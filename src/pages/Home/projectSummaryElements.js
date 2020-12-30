import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Container = styled.div`
    width: 94%;
    margin-left: auto;
`

export const ProjectWrapper = styled(motion.div)`
    width: 60%;
    height: 700px;
    margin: 100px auto;
    position: relative;
    cursor: pointer;
`
export const HoveringWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 9;
`

export const ImageWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
`
export const ImageOpacity = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
    z-index: 2;
`

export const HoveringBackground = styled(motion.div)`
    position: absolute;
    width: 0;
    height: 100%;
    opacity: 0.9;
    background-color: ${props => props.theme.colors.linkBtnColor};
    z-index: 3;
`

export const Image = styled.img`
    object-fit: cover;
    object-position: 0 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`

export const InfoWrapper = styled(motion.div)`
    z-index: 10;
    position: absolute;
    left: 80px;
    bottom: 60px;
`

export const ProjectTitle = styled.h3`
    font-size: 40px;
    margin-bottom: 20px;
    z-index: 10;
`
export const ProjectDescription = styled.p`
    margin-bottom: 20px;
    z-index: 10;
`
export const ProjectLink = styled(Link)`
    z-index: 10;
    background-color: ${props => props.theme.colors.linkBtnColor};
    padding: 16px 32px;
    text-decoration: none;
    display: inline-flex;
    color: ${props => props.theme.colors.linkTextColor};
`

export const ProjectNumber = styled(motion.p)`
    font-size: 70px;
    font-weight: 500;
    color: white;
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 0;
    z-index: 10;
`