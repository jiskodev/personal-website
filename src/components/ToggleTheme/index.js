import React from 'react'
import { RiMoonFill } from 'react-icons/ri'
import { FiSun } from 'react-icons/fi'
import { ThemeButton } from './toggleThemeElements'

function ToggleThemeButton({ isLightMode, toggleTheme }) {
    return (
        <>
            <ThemeButton onClick={toggleTheme} isLightMode>
                {isLightMode ? <FiSun style={{color: 'black'}} size={30} /> : <RiMoonFill style={{color: '#E1E4E4'}} size={30}  />}
            </ThemeButton>
        </>
    )
}

export default ToggleThemeButton
