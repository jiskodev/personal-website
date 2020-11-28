import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { HiMenuAlt1 } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'

export const Container = styled(motion.div)`
    width: 6%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    padding-top: 20px;
    padding-bottom: 20px;
    position: fixed;
    z-index: 10;
    @media (max-width: 768px) {
        width: 100%;
        height: 80px;
        flex-direction: row;
        align-items: center;
        padding: 0 20px;
    }
`

export const MenuBtn = styled(HiMenuAlt1)`
    color: white;
    cursor: pointer;
`

export const CloseBtn = styled(MdClose)`
    color: white;
    cursor: pointer;
`

export const SideBarMenu = styled.div`
    display: flex;
    @media (max-width: 768px) {
        align-items: center;
        height: 60px;
    }
    @media (min-width: 768px) {
        display: none;
    } 
`

export const SideBarBox = styled.div`
    min-width: 100px;
    flex-direction: column;
    min-height: 100px;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
        display: none;
    }
`

export const SideBarBoxLogo = styled.div`
    min-width: 100px;
    flex-direction: column;
    min-height: 100px;
    display: flex;
    justify-content: center;
    padding-left: 10px;
    padding-right: 10px;
    @media (max-width: 768px) {
        align-self: center;
        padding: 0;
        width: 30px;
    }
`

export const SideBarList = styled.div`
    transform: rotate(270deg);
`

export const SideBarListItem = styled(Link)`
    margin-right: 40px;
    text-decoration: none;
    font-weight: 500;
    color: #C8C9C9;
    :hover {
        color: #00e0f9;
    }
`

export const SideBarLinkBox = styled.div`
    margin-bottom: 20px;

`

export const SideBarLink = styled.a`

`

export const LinkedIn = styled(FaLinkedin)`
    color: #C8C9C9;
    :hover {
        color: #00e0f9;
    }
`

export const GitHub = styled(FaGithub)`
    color: #C8C9C9;
    :hover {
        color: #00e0f9;
    }
`
export const Mail = styled(MdEmail)`
    color: #C8C9C9;
    :hover {
        color: #00e0f9;
    }
`