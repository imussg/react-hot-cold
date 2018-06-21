import React from 'react';
 
import './guess-list.css';

export default function GuessList(props) {
    if(props.guesses instanceof Array) {
        console.log("it's an array");
    }
    const guesses = props.guesses.map((guess, index) => (
        <li key={index}>
            {guess}
        </li>
    ));

    return (
        <ul id="guessList" className="guessBox clearfix">
            {mappedGuesses}
        </ul>
    );
};
