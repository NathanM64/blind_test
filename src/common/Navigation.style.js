import styled from 'styled-components';
import { Link } from 'react-router-dom'
export const NavBar = styled.div`

    background: #309ACC;
    height: 4em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1em;
    align-items: center;
    box-sizing: border-box;

`
export const NameApp = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;
`

export const NavImage = styled.img`
    height: 2.5em;
    width: 2.5em;
    margin-right: 0.5em;
    border-radius: 1.5em;
`
export const NavActionLink = styled.div`
    display: flex;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`
export const NavSignOut = styled.div`
    padding: 5px;
`
export const SignOut = styled(Link)`
    display: flex;
    align-items: center;
`

