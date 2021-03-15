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
                <Image src={{ uri: data.answers[answerIndex]}} />
            ) : (
                <Text>{data.answers[answerIndex]}</Text>
            )}
        </Card>
    );

    return (
        <QuestionsWrapper>
            <h5>
                {data.question}
            </h5>
            <ReactAudioPlayer 
                src={data.audio_url}
                autoPlay={true}
            />
            <QuestionsLayout>
                <Answer answerIndex={1} />
                <Answer answerIndex={2} />
            </QuestionsLayout>
            <QuestionsLayout>
                <Answer answerIndex={3} />
                <Answer answerIndex={4} />
            </QuestionsLayout>
        </QuestionsWrapper>
    )
}

export default Question
