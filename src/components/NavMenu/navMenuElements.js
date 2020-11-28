import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { RiMoonFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export const Container = styled(motion.div)`
    width: 100%;
    height: 100vh;
    min-height: -webkit-fill-available;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 8;
    position: fixed;
    background-color: black;
`

export const ItemsWrapper = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MenuLink = styled(Link)`
    margin: 20px;
    text-decoration: none;
    color: white;
    font-size: 22px;
    font-weight: 500;
    :hover {
        color: #00e0f9;
    }
`

export const SocialLinksBox = styled.div`
    display: flex;
`

export const SocialLink = styled.a`
    margin-right: 10px;
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

export const ToggleThemeBox = styled.div`
`

export const ToggleTheme = styled(RiMoonFill)`
    color: #C8C9C9;
`