import styled from 'styled-components'

export const Container = styled.div`
    width: 94%;
    height: 100vh;
    margin-left: auto;
    
    overflow: hidden;
    @media (max-width: 768px) {
        
        width: 100%;
        margin-left: 0;
        padding-top: 100px;
    }
`

export const Wrapper = styled.div`
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
`

export const Box = styled.div`
    
`

export const ImageWrapper = styled.div`
    min-width: 250px;
    display: flex;
    justify-content: center;
`

export const Hello = styled.h2`
    text-align: left;
    color: #FFFFFF;
    font-size: 70px;
    @media (max-width: 768px) {
        font-size: 40px;
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