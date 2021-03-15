import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { Avatar, Title, ActionLink } from "./Home.style.js"

const Home = () => {
    const player = useSelector((state) => state.user.player);
    return (
        <div>
            <div>
                <Title>Bienvenue {player.name}!</Title>
                <Avatar src={{uri:player.avatar ||"https://static.thenounproject.com/png/363640-200.png"}} alt="User avatar"/>
            </div>
            <div>
                <p>Vous avez déjà fais {player.nb_played_games} parties</p>
                <div>
                    <ActionLink to="play" class="button">Commencer une nouvelle partie !</ActionLink>
                </div>
            </div>
        </div>
    );
}

export default Home
