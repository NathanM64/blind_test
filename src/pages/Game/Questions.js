import React, { useEffect, useState } from 'react';
import { Card, Image, QuestionsLayout, QuestionsWrapper, Text } from './index.style';
import ReactAudioPlayer from 'react-audio-player';

const Question = ({ data, chooseAnswer, startTime }) => {

    const [sound, setSound] = useState();
    const makeChoice = (answerIndex) => {
        chooseAnswer({
            questionId: data.id,
            choice: data.answers[answerIndex],
            time: new Date().getTime() - startTime,
        });
    };

    const Answer = ({ answerIndex }) => (
        <Card onClick={() => makeChoice(answerIndex)}>
            {data.type === "image" ? (
                <Image src={data.answers[answerIndex]} />
            ) : (
                <Text>{data.answers[answerIndex]}</Text>
            )}
        </Card>
    );

    function randomize(tab) {
        var i, j, tmp;
        for (i = tab.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            tmp = tab[i];
            tab[i] = tab[j];
            tab[j] = tmp;
        }
        return tab;
    }

    let indexTab = [0, 1, 2, 3];
    indexTab = randomize(indexTab);
    return (
        <QuestionsWrapper>
            <h5>
                {data.question}
            </h5>
            <ReactAudioPlayer 
                src={data.audio_url}
                autoPlay={true}
                controls={true}
            />
            <QuestionsLayout>
                <Answer answerIndex={indexTab[0]} />
                <Answer answerIndex={indexTab[1]} />
            </QuestionsLayout>
            <QuestionsLayout>
                <Answer answerIndex={indexTab[2]} />
                <Answer answerIndex={indexTab[3]} />
            </QuestionsLayout>
        </QuestionsWrapper>
    )
}

export default Question
