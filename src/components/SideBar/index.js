import React from 'react'
import Logo from '../Logo'
import ToggleThemeButton from '../ToggleTheme'
import { Container, GitHub, LinkedIn, ThemeBox, Mail, MenuBtn, SideBarListItemR, CloseBtn, SideBarBox, SideBarBoxLogo, SideBarLink, SideBarLinkBox, SideBarList, SideBarListItem, SideBarMenu } from './sideBarElements'
import { useLocation } from 'react-router-dom'


function SideBar({ toggle, open, toggleTheme, isLightMode }) {
    const { pathname } = useLocation()
    const isAtHome = pathname === '/' ? true : false

    return (
        <>
            <Container initial={{ y: -200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
                <SideBarBoxLogo>
                    <Logo />
                </SideBarBoxLogo>
                <SideBarMenu>
                    {open ? <CloseBtn onClick={toggle} size={30}></CloseBtn> : <MenuBtn onClick={toggle} size={30}></MenuBtn>}
                </SideBarMenu>
                    

                <SideBarBox>
                    <SideBarList>
                        <SideBarListItemR to='/contact'>Contact</SideBarListItemR>
                        {isAtHome ?
                        (<SideBarListItem to="projects"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true">Projects</SideBarListItem>
                        ) : (<SideBarListItemR to={{
                            pathname: '/',
                            hash: '#projects'
                        }}>Projects</SideBarListItemR>)}
                        {isAtHome ?
                        (<SideBarListItem to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true">About</SideBarListItem>
                        ) : (<SideBarListItemR to={{
                            pathname: '/',
                            hash: '#about'
                        }}>About</SideBarListItemR>)}
                        {isAtHome
                        ? (
                            <SideBarListItem to="hero"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true">Home</SideBarListItem>
                        ): <SideBarListItemR to='/'>Home</SideBarListItemR>
                        }
                        
                    </SideBarList>
                </SideBarBox>
                <SideBarBox>
                    <SideBarLinkBox>
                        <SideBarLink href="https://www.linkedin.com/in/sergio-andrade-sirghea-694b82144/" target="_blank"><LinkedIn size={24}></LinkedIn></SideBarLink>
                    </SideBarLinkBox>
                    <SideBarLinkBox>
                        <SideBarLink href="https://github.com/jiskodev" target="_blank"><GitHub size={24}></GitHub></SideBarLink>
                    </SideBarLinkBox>
                    <SideBarLinkBox>
                        <SideBarLink href="mailto:ss.andrade@icloud.com"><Mail size={24}></Mail></SideBarLink>
                    </SideBarLinkBox>
                </SideBarBox>
            </Container>
            <ThemeBox>
                <ToggleThemeButton toggleTheme={toggleTheme} isLightMode={isLightMode} />
            </ThemeBox>
            
        </>
    )
}

export default SideBar
