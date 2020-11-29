import { useAnimation } from 'framer-motion'
import React, {useEffect} from 'react'
import { Container, ItemsWrapper, MenuContainer, MenuLink, SocialLink, SocialLinksBox, GitHub, LinkedIn, Mail, ToggleThemeBox, ToggleTheme } from './navMenuElements'

const MenuVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 }},
    hidden: { opacity: 0, y: "-100%", transition: { duration: 0.5 } }
}

function NavMenu({open}) {
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
                    <MenuLink>Home</MenuLink>
                    <MenuLink>About</MenuLink>
                    <MenuLink>Projects</MenuLink>
                    <MenuLink>Contact</MenuLink>
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
                        <ToggleTheme size={30}></ToggleTheme>
                    </ToggleThemeBox>
                </ItemsWrapper>
            </Container>
        </>
    )
}

export default NavMenu