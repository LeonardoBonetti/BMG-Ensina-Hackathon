import React,{useState,useEffect} from 'react';
import Quiz from 'react-quiz-component';
import { quiz as quizinho } from './QuizContents/QuizPoupanca';
import { Redirect } from 'react-router';

import './Quiz.css';

export function QuizPoupanca() {
    const [redirect, setredirect] = useState(false);
      
    if (redirect) {
        return <Redirect to='/'/>;
    }

      return (
        <Quiz
            className="Qualquercoisa"
            quiz={quizinho}
            showDefaultResult={false}
            customResultPage={(obj) => {       
                setredirect(true);
            }}
            shuffle={true}
            showInstantFeedback={true}
        />
    );
}