
import React from 'react';
import { Wrapper, ButtonWrapper } from './Questioncard.style';

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNumber: number;
    totalQuestion: number;
}

export const Qscard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNumber, totalQuestion}) => {
    return (
        <Wrapper>
            <p>
                Question: {questionNumber} / {totalQuestion}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question}} />
            <div>
                {answers.map(answer => (
                    <ButtonWrapper
                        correct = {userAnswer?.correctAnswer === answer}
                        userClicked = { userAnswer?.answer === answer }
                    >
                        <button disabled={userAnswer} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>
    )
}