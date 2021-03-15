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

    border-radius: 5px;
    padding: 5px;

    :hover {
        background: black;
        color: white;
    }
`

export const NavImage = styled.img`
    height: 2.5em;
    width: 2.5em;
    margin-right: 0.5em;
    border-radius: 1.5em;
`
export const NavActionLink = styled.div`
    position: relative;
    margin: 0 auto;
`
export const NavLink = styled(Link)`
    padding: 15px;
    margin: 15px;
    border-radius: 5px;
    :hover {
        background: black;
        color: white;
    }
`
export const NavSignOut = styled.div`
    padding: 5px;
    display: flex;
    border-radius: 5px;
    padding: 5px;

    :hover {
        background: black;
        color: white;
    }
`
export const SignOut = styled(Link)`
    display: flex;
    align-items: center;
    margin-right: 10px;
`

