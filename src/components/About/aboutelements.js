import styled from 'styled-components'

export const Container = styled.div`
    width: 94%;
    margin-left: auto;
    height: 100vh;
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        width: 100%;
        margin: 0;
        height: auto;
    }
`

export const Wrapper = styled.div`
    width: 70%;
    margin: 0 auto;
    @media (max-width: 768px) {
        width: 95%;
    }
`

export const Title = styled.p`
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 60px;
    @media (max-width: 768px) {
        font-size: 24px;
    }
`

export const Text = styled.p`
    font-size: 20px;
    line-height: 1.6;
    margin-bottom: 40px;
    @media (max-width: 768px) {
        font-size: 18px;
    }

`

export const TechTitle = styled.h3`
    margin-top: 110px;
    margin-bottom: 30px;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.5;
    @media (max-width: 768px) {
        font-size: 22px;
    }
`

export const ALink = styled.a`
    color: #00E0F9;
    text-decoration: none;
`

export const Highlight = styled.span`
    position: relative;
    &::before {
        content:"";
        width: calc(100% + 5px);
        height: 7px;
        transform: translateX(-50%);
        left: 50%;
        background-color: #00E0f9;
        position: absolute;
        bottom: 1px;
        z-index: -1;
        @media (max-width: 768px) {
            width: 100%;
        }
    }
`

export const TechTextWrapper = styled.div`
    width: 70%;
    margin: 0 auto;
    @media (max-width: 768px) {
        width: 90%;
    }
`

export const TechText = styled.p`
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 2.5;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`