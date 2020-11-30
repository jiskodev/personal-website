import styled from 'styled-components'

export const ThemeButton = styled.div`
    cursor: pointer;
    padding: 12px;

    :hover {
        background-color: ${props => props.theme.colors.toggleBackgroundHover};
    }

`