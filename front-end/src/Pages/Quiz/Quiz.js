import React from 'react';
import Quiz from 'react-quiz-component';
import { quiz as quizinho } from './QuizContents/QuizPoupanca';

import './Quiz.css';

export const QuizPoupanca = () => (
    <Quiz
        className="Qualquercoisa"
        quiz={quizinho}
        showDefaultResult={false}
        customResultPage={renderCustomResultPage}
        shuffle={true}
        showInstantFeedback={true}
    />
)

const renderCustomResultPage = (obj) => {
    console.log(obj);
}