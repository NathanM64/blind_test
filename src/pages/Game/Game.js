import React, { useState } from 'react';
import { Button, GameWrapper, LayoutGame } from './index.style';
import { useDispatch } from 'react-redux';
import api from '../../apiHelper';
import { incrementPlayerNbPlayed } from '../../common/playerActions';
import Gameplay from './Gameplay';

const Game = () => {

    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(-1);
    const dispatch = useDispatch();
    const getNewGame = () => {
        api.getQuestions().then((questions) => {
            if (questions === null) {
                alert("Error");
            } else {
                setAnswers([]);
                setScore(-1);
                setQuestions(questions);
                // console.log(questions);
            }
        });
    };

    const finishGame = async (answers) => {
        const score = await api.submitAnswers(answers);
        setScore(score);
        setAnswers(answers);
        // console.log("Score:", score);
        dispatch(incrementPlayerNbPlayed());
    };

    return (
        <GameWrapper>
            <h1>Game</h1>
            {answers && answers.length > 0 ? (
                <LayoutGame>
                    <h2>Votre score est : {score}</h2>
                    <h3>Merci d'avoir joué</h3>
                    <Button onClick={() => getNewGame()}>Nouvelle Partie</Button>
                </LayoutGame>
            ) : questions && questions.length > 0 ? (
                <Gameplay questions={questions} finishGame={finishGame} />
            ) : (
                <Button onClick={() => getNewGame()}>Nouvelle partie</Button>
            )}
        </GameWrapper>
    );
};

export default Game
