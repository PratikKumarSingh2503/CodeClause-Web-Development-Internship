import React, { useRef, useState } from 'react';
import '../fantasy.css';
import { medium3 } from './medium3.js';

const TOFMedium = () => {

  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(medium3[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];


  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore(prev => prev + 1)
      }
      else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  }

  const next = () => {
    if (lock === true) {
      if (index === medium3.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(medium3[index]);
      setLock(false);
      option_array.map((option) => {
        option.current.classList.remove('wrong');
        option.current.classList.remove('correct');
        return null;
      })
    }
  }

  const reset = () => {
    setIndex(0);
    setQuestion(medium3[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  }

  return (
    <div className='giquiz'>
      <h1>Quiz</h1>
      <hr />
      {result ? <></> : <>
        <h2>{index + 1}. {question.question}</h2>
        <ul>
          <li ref={Option1} onClick={(e) => { checkAns(e, 1) }}>{question.option1}</li>
          <li ref={Option2} onClick={(e) => { checkAns(e, 2) }}>{question.option2}</li>
          <li ref={Option3} onClick={(e) => { checkAns(e, 3) }}>{question.option3}</li>
          <li ref={Option4} onClick={(e) => { checkAns(e, 4) }}>{question.option4}</li>
        </ul>
        <button onClick={next}>Next</button>
        <div className='index'>{index + 1} of {medium3.length} questions</div>
      </>}
      {result ? <>
        <h2>You Scored {score} out of {medium3.length} </h2>
        <button onClick={reset}>Reset</button>
      </>: <></>}

    </div>
  );
}

export default TOFMedium;