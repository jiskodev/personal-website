import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MdNavigateNext } from 'react-icons/md'

export const Container = styled(motion.div)`
    width: 94%;
    margin-left: auto;
    height: 100vh;
    @media (max-width: 768px) {
        width: 100%;
        padding-top: 100px;
        height: auto;
    }
`

export const Wrapper = styled.div`
    margin: 0 auto;
    width: 90%;
    display: flex;
    height: 100vh;
    justify-content: space-around;
    align-items: center;
    text-align: left;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
        width: 90%;
        justify-content: center;
    }
`

export const LeftBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 380px;
    min-width: 360px;
`

export const NumberBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`

export const NumberLine = styled.div`
    width: 80px;
    height: 3px;
    background-color: ${props => props.theme.colors.linkBtnColor};
    border-radius: 100px;
    margin-right: 15px;
`

export const Number = styled.p`
    font-size: 14px;
    color: ${props => props.theme.colors.linkBtnColor};
`

export const ProjectTitle = styled.h3`
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 40px;
    color: ${props => props.theme.colors.textColor};
`

export const ProjectDescription = styled.p`
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 40px;
    line-height: 30px;
    color: ${props => props.theme.colors.pColor};

`

export const ProjectLinkBox = styled.div`
    margin: 20px 0;
    background-color: ${props => props.theme.colors.linkBtnColor};
    padding: 16px 32px;
    max-width: 220px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    transition: 0.2s;
    :hover {
        max-width: 240px;
    }
`

export const ProjectLink = styled(Link)`
    background: transparent;
    text-decoration: none;
    color: ${props => props.theme.colors.linkTextColor};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Icon = styled(MdNavigateNext)`
    color: ${props => props.theme.colors.linkTextColor}
`

export const RightBox = styled.div`

`
export const ProjectImageWrapper = styled.div`
    width: 600px;
    height: 380px;
    overflow: hidden;
    @media (max-width: 768px) {
        width: 300px;
        height: 180px;
        margin-bottom: 60px;
    }
    
`

export const ProjectImage = styled.img`
    width: 100%;
    cursor: pointer;
    transition: 1s;
    :hover{
        transform: translateY(calc(-100% + 380px))
    }

    @media (max-width: 768px) {
        :hover {
            transform: translateY(calc(-100% + 180px))
        }
    }
`