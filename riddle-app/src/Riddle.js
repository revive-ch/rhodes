import React, { useState } from 'react';
import AudioPlayer from './AudioPlayer';
import './Riddle.css';

function Riddle({ question, correctAnswer, audioSrc }) {
    const [userAnswer, setUserAnswer] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
    const [shake, setShake] = useState(false);
  
    const handleInputChange = (e) => {
        setUserAnswer(e.target.value);
        // now whenever the user types something, the red goes away
        // ---input that hasn't been completed is not invalid
        if (!isValid) {
            setIsValid(true);
        }
    };

    /* I'm sorry I couldn't figure out a way to make the field reject input without this monstrosity */
    const defaultStyle = {
        fontFamily: "'Sedgwick Ave Display', cursive",
        marginTop: "15px",
        marginBottom: "15px",
        width: "100%",
        boxSizing: "border-box",
        padding: "10px",
        border: "1px solid #ccc"
    };

    const invalidStyle = {
        ...defaultStyle,
        border: "2px solid red"
    };
    /************************************************************************************************/

    const checkAnswer = () => {
        if (userAnswer.trim().toLowerCase() === correctAnswer) {
            setIsAnswerCorrect(true);
        } else {
            setIsValid(false);
            setShake(true);
            setTimeout(() => setShake(false), 500); 
        }
    };

    return (
        <div>
            {isAnswerCorrect ? (
                <AudioPlayer audioSrc={audioSrc} />
            ) : (
                <>
                    <h2>{question}</h2>
                    <input
                        type="text"
                        value={userAnswer}
                        onChange={handleInputChange}
                        placeholder="Do you know the answer?"
                        style={isValid ? defaultStyle : invalidStyle}
                        className={shake ? 'shake' : ''}
                    />
                    <button onClick={checkAnswer}>Prove it</button>
                </>
            )}
        </div>
    );
}

export default Riddle;
