import React, { useState } from 'react';
import {GameplayWrapper} from './index.style';
import Question from './Questions';

const Gameplay = ({ questions, finishGame }) => {

    const [answers, setAnswers] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [startTime, setStartTime] = useState(new Date().getTime());

    const currentQuestion = questions[currentQuestionIndex];
    const chooseAnswer = (answer) => {
        const newAnswers = [...answers, answer];
        console.log(questions.length, currentQuestionIndex);
        if (questions.length - 1 > currentQuestionIndex) {
            setAnswers(newAnswers);
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setStartTime(new Date().getTime());
        } else {
            finishGame(newAnswers);
        }
    };

    return (
        <GameplayWrapper>
            <Question
                data={currentQuestion}
                chooseAnswer={chooseAnswer}
                startTime={startTime}
            />
        </GameplayWrapper>
    )
}

export default Gameplay
