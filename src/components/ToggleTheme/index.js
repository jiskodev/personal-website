import React from 'react'
import { RiMoonFill, RiSunFill } from 'react-icons/ri'
import { ThemeButton } from './toggleThemeElements'

function ToggleThemeButton({ isLightMode, toggleTheme }) {
    return (
        <>
            <ThemeButton onClick={toggleTheme} isLightMode>
                {isLightMode ? <RiSunFill style={{color: 'black'}} size={30} /> : <RiMoonFill style={{color: '#E1E4E4'}} size={30}  />}
            </ThemeButton>
        </>
    )
}

export default ToggleThemeButton
