import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 94%;
    margin-left: auto;
`

export const ProjectWrapper = styled.div`
    width: 60%;
    height: 700px;
    margin: 100px auto;
    position: relative;
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

export const Image = styled.img`
    object-fit: cover;
    object-position: 0 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`

export const InfoWrapper = styled.div`
    z-index: 10;
    position: absolute;
    left: 20px;
    bottom: 30px;
`

export const ProjectTitle = styled.h3`
    z-index: 10;
`
export const ProjectDescription = styled.p`
    z-index: 10;
`
export const ProjectLink = styled(Link)`
    z-index: 10;
`