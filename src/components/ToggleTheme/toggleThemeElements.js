import styled from 'styled-components'

export const ThemeButton = styled.div`
    cursor: pointer;
    padding: 12px;
    position: fixed;
    top: 40px;
    right: 40px;

    :hover {
        background-color: ${props => props.theme.colors.toggleBackgroundHover};
    }

    @media (max-width: 768px) {
        display: none;
    }
`