import React from 'react'
import { useSelector } from "react-redux";
import { ProfileCard, Avatar, Title } from "./Profile.style.js"

const Profile = () => {
    const player = useSelector((state) => state.user.player);
    return (
        <ProfileCard>
            <Title>{player.name}</Title>
            <Avatar src={player.avatar} alt="User avatar" />
            <p>Nombre de parties jouées :{player.nb_played_games}</p>
        </ProfileCard>
    )
}

export default Profile
