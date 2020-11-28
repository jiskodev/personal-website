import styled from 'styled-components'

export const Container = styled.div`
    width: 94%;
    height: 100vh;
    margin-left: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        margin-left: 0;
        padding-top: 100px;
    }
`

export const Wrapper = styled.div`
    width: 30%;
    min-width: 300px;
`

export const ImageWrapper = styled.div`
    width: 30%;
    min-width: 300px;
    display: flex;
    justify-content: center;
`

export const Hello = styled.h2`
    text-align: left;
    color: #FFFFFF;
    font-size: 80px;
    @media (max-width: 768px) {
        font-size: 42px;
        align-self: flex-start;
    }
`

export const Text = styled.p`
    font-size: 20px;
    font-weight: 500;
    text-align: left;
    color: #FFFFFF;
`

export const Image = styled.img`
    transform: rotate(12deg);
    
`