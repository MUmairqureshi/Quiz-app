// import {initNotification} from './services/firebaseservice'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import {Qscard } from './components/questioncard'
import { GlobalStyle, Wrapper } from './App.style';
 import  { fetchQuestions , Difficulty , QuestionState}  from './api'

const TOTAL__QUESTION  = 10
type AnswerObject ={
question : string ;
answer : string ;
correct : boolean;
correctanswer :string
}




const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function App() {
  // const  massefe = initNotification
  const classes = useStyles();

const [loading , setLoading] = useState(false)

const [questions , setQuestions] = useState <QuestionState[]>([])


const [number , setNumber] = useState(0)

const [userAnswers , setUserAnswers] = useState<AnswerObject[]>([])

const [score , setScore] = useState(0)

const [gameover , setGameover] = useState(true)

  const startquiz  = async ()=>{
    setLoading(true);
    setGameover (false);
    const newQuestion = await fetchQuestions(TOTAL__QUESTION , Difficulty.Easy);
    setQuestions(newQuestion);
    setScore(0)
  setUserAnswers([]) ;
  setNumber(0);
  setLoading(false)

  }
  const next  = async () => {
    const nextQuestion = number + 1 ;
  
  if(nextQuestion === TOTAL__QUESTION){
    setGameover (true)
  } 
  else { 
    setNumber(nextQuestion)
  }
  
  
  
  }
// console.log(fetchQuestions( TOTAL__QUESTION, Difficulty.Easy))

const checkanswre =  (e: React.MouseEvent<HTMLButtonElement> )=>{ 

if (! gameover ){
  const answer = e.currentTarget.value

const correct = questions[number].correct_answer === answer;
if (correct) setScore(prev =>  prev + 1)
const answerObject  = {
  question : questions[number].question ,
  answer,
  correct,
  correctanswer : questions[number].correct_answer
}

setUserAnswers(prev =>[...prev , answerObject])
}


} ;
  return (
  <>
      <GlobalStyle />

 <Wrapper>
<h1> Quiz</h1>
{
gameover || userAnswers.length == TOTAL__QUESTION ? (
<div className={classes.root}>
<Button   onClick={startquiz} variant="contained" color="primary">
Begin Start
      </Button>
      </div>
) : null}
{! gameover ? (

 <p className="score" > Score : {score}
 </p> ) : null }

{ loading ? (

 <p>
   Loading
 </p> ) : null}
 





{ !loading && !gameover?(
 <Qscard
     questionNumber={number +1 }
     totalQuestion = {TOTAL__QUESTION}
    question={ questions[number].question } 
    answers = {questions[number].answers}
    userAnswer ={userAnswers ? userAnswers[number] :undefined}
    callback={checkanswre}
   /> ):null}




{!gameover && !loading&& userAnswers.length == number + 1 && number !== TOTAL__QUESTION - 1 ? (

<Button    onClick={next} variant="contained" color="secondary">
Begin Start
      </Button>

) : null }
    </Wrapper>
     </>
  );
}

 export default App;