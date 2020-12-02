import { useAnimation } from 'framer-motion'
import React, {useEffect} from 'react'
import { Container, ItemsWrapper, MenuContainer, MenuLink, MenuLinkR, SocialLink, SocialLinksBox, GitHub, LinkedIn, Mail, ToggleThemeBox } from './navMenuElements'
import ToggleThemeButton from '../ToggleTheme'


const MenuVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 }},
    hidden: { opacity: 0, y: "-100%", transition: { duration: 0.5 } }
}

function NavMenu({open, toggle, isLightMode, toggleTheme}) {
    const controls = useAnimation()

    useEffect(() => {
        if (open) {
            controls.start('visible')
        } else if (!open) {
            controls.start('hidden')
        }
    }, [controls, open])


    return (
        <>
            <Container animate={controls} variants={MenuVariants} initial='hidden'>
                <ItemsWrapper>
                </ItemsWrapper>
                <MenuContainer>
                    <MenuLinkR to='/'
                        onClick={toggle}>Home</MenuLinkR>
                    <MenuLink to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                onClick={toggle}>About</MenuLink>
                    <MenuLink to="projects"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                onClick={toggle}>Projects</MenuLink>
                    <MenuLinkR to='/contact'
                                onClick={toggle}>Contact</MenuLinkR>
                </MenuContainer>
                <ItemsWrapper>
                    <SocialLinksBox>
                        <SocialLink>
                            <LinkedIn size={30}></LinkedIn>
                        </SocialLink>
                        <SocialLink>
                            <GitHub size={30}></GitHub>
                        </SocialLink>
                        <SocialLink>
                            <Mail size={30}></Mail>
                        </SocialLink>
                    </SocialLinksBox>
                    <ToggleThemeBox>
                        <ToggleThemeButton toggleTheme={toggleTheme} isLightMode={isLightMode} />
                    </ToggleThemeBox>
                </ItemsWrapper>
            </Container>
        </>
    )
}

export default NavMenu
