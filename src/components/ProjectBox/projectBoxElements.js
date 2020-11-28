import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {GrFormNext} from 'react-icons/gr'

export const Container = styled.div`
    width: 94%;
    margin-left: auto;
    height: 100vh;
    @media (max-width: 768px) {
        width: 100%;
        padding-top: 100px;
    }
`

export const Wrapper = styled.div`
    margin: 0 auto;
    width: 80%;
    display: flex;
    height: 100vh;
    justify-content: space-between;
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
`

export const NumberBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`

export const NumberLine = styled.div`
    width: 80px;
    height: 3px;
    background-color: #00E0F9;
    border-radius: 100px;
    margin-right: 15px;
`

export const Number = styled.p`
    font-size: 14px;
    color: #00E0F9;
`

export const ProjectTitle = styled.h3`
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 40px;
`

export const ProjectDescription = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: #CDCDCD;
    margin-bottom: 40px;
    line-height: 30px;

`

export const ProjectLinkBox = styled.div`
    margin: 20px 0;
    background-color: #00E0f9;
    padding: 16px 32px;
    max-width: 220px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    
`

export const ProjectLink = styled(Link)`
    background: transparent;
    text-decoration: none;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Icon = styled(GrFormNext)`
    color: black;
`

export const RightBox = styled.div`

`
export const ProjectImageWrapper = styled.div`
    width: 500px;
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