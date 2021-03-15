import React, { useState } from 'react';
import { GameWrapper, LayoutGame } from './index.style';
import { useDispatch } from 'react-redux';
import api from '../../apiHelper';
import { incrementPlayerNbPlayed } from '../../common/playerActions';

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
                console.log(questions);
            }
        });
    };

    const finishGame = async (answers) => {
        const score = await api.submitAnswers(answers);
        setScore(score);
        setAnswers(answers);
        console.log("Score:", score);
        dispatch(incrementPlayerNbPlayed());
    };

    return (
        <GameWrapper>
            {/* <h1>Game</h1>
            {answers && answers.length > 0 ? (
                <LayoutGame>

                </LayoutGame>
            ) : questions && questions.length > 0 ? (
                <LayoutGame>

                </LayoutGame>
            ) : questions && questions.length > 0 ? (
                
            )} */}
        </GameWrapper>
    )
}

export default Game
