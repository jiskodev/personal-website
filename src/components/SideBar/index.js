import React from 'react'
import Logo from '../Logo'
import ToggleThemeButton from '../ToggleTheme'
import { Container, GitHub, LinkedIn, Mail, MenuBtn, CloseBtn, SideBarBox, SideBarBoxLogo, SideBarLink, SideBarLinkBox, SideBarList, SideBarListItem, SideBarMenu } from './sideBarElements'

function SideBar({ toggle, open, toggleTheme, isLightMode }) {
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
                        <SideBarListItem>Contact</SideBarListItem>
                        <SideBarListItem>Projects</SideBarListItem>
                        <SideBarListItem>About</SideBarListItem>
                        <SideBarListItem to='/'>Home</SideBarListItem>
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
            <ToggleThemeButton toggleTheme={toggleTheme} isLightMode={isLightMode} />
        </>
    )
}

export default SideBar
