import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const ProfileCard = styled.div`
    background: grey;
    width: 500px;
    padding: 2em;
    border-radius: 1em;
    position: relative;
    margin: 0 auto;
    top: 50px;
`

export const Title = styled.h1`
    font-size: 3em;
`;

export const Avatar = styled.img`
    height: 10em;
    width: 10em;
    border-radius: 5em;
`;

export const ActionLink = styled(Link)`
    transition: 0.25s;
    background: yellow;
    border: 2px solid;
    border-radius: 5px;
    line-height: 1;
    margin: 0.5em;
    padding: 0.5em 1.5em;

    :hover, :focus {
        background: red;
        box-shadow: 0 0.5em 0.5em -0.4em;
    }
`
