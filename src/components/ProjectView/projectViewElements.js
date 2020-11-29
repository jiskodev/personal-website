import styled from 'styled-components'
import {GrFormNext} from 'react-icons/gr'

export const Container = styled.div`
    width: 94%;
    margin-left: auto;

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const Wrapper = styled.div`
    width: 75%;
    margin: 0 auto;
    @media (max-width: 768px) {
        width: 90%;
    }
`

export const WrapperHead = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60vh;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        align-items: flex-start;
        padding-top: 100px;
    }
`

export const BoxLeft = styled.div`
    text-align: left;
`

export const Title = styled.h2`
    font-size: 50px;
    font-weight: 600;
`

export const TextDescription = styled.p`
    font-size: 20px;
    line-height: 1.8;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const BoxRight = styled.div`
    margin-bottom: 60px;
`

export const LightLine = styled.div`
    width: 100%;
    background-color: #CDCDCD;
    height: 1px;
    margin-bottom: 25px 0;
`

export const ListDescription = styled.p`
    text-align: left;
`

export const ProjectImage = styled.img`
    width: 100%;
`

export const LinksBox = styled.div`
    margin-top: 60px;
    display: flex;
    @media (max-width: 768px) {

        flex-direction: column;
    }
`

export const ProjectLinkBox = styled.div`
    margin: 20px 0;
    background-color: #00E0f9;
    padding: 16px 32px;
    max-width: 220px;
    min-width: 210px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    margin-right: 20px;
    transition: 0.2s;
    :hover {
        background-color: #fff;
    }
`

export const OutsideLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
`

export const Icon = styled(GrFormNext)`
    color: black;
`