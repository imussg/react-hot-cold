import React from 'react';
import { connect } from 'react-redux';
import { submitGuess } from '../actions';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export class Game extends React.Component {

	// constructor(props) {
	// 	super(props);
	// 	this.number = Math.ceil(Math.random() * 100);
	// 	console.log(this.number);
	// 	this.temperature = {
	// 		freezing: 40,
	// 		cold: 30,
	// 		warm: 20,
	// 		hot: 10,
	// 		burning: 5
	// 	};
	// 	this.state = {
	// 		feedback: "Make your guess!",
	// 		guesses: [],
	// 		gameOver: false
	// 	};
	// }

	onGuessSubmit(e) {
		e.preventDefault();
		const guess = document.getElementById("userGuess").value;
		this.props.dispatch(submitGuess(guess));
		// let gameOver = false;
		// if(guess !== "" && Number(guess)) {
		// 	const range = Math.abs(Number(guess) - this.number);
		// 	let feedback = '';
		// 	if(range === 0) {
		// 		feedback = `You guessed the number ${this.number}!
		// 		It took you ${this.state.guesses.length+1} guesses`;
		// 		gameOver = true;
		// 	} else if(range <= this.temperature.burning) {
		// 		feedback = `You're burning up!!`;
		// 	} else if(range <= this.temperature.hot) {
		// 		feedback = `You're hot!`;
		// 	} else if(range <= this.temperature.warm) {
		// 		feedback = `You're warm`;
		// 	} else if(range <= this.temperature.cold) {
		// 		feedback = `You're cold`;
		// 	} else {
		// 		feedback = `Brrrr! You're freezing!`;
		// 	}

		// 	this.setState({
		// 		feedback,
		// 		guesses: [...this.state.guesses, guess],
		// 		gameOver
		// 	});
		// }
	}

    render() {
    	console.log(this.props.number);
    	return (
	        <div>
	            <Header />
	            <GuessSection 
	            	feedback={this.props.feedback} 
	            	onSubmit={e => this.onGuessSubmit(e)} />
	            <GuessCount count={this.props.guesses.length} />
	            <GuessList guesses={this.props.guesses} />
	        </div>
    	);
    }
}

Game.defaultProps = {
	feedback: "Make your guess!",
	guesses: []
};

const mapStateToProps = state => ({
	feedback: state.feedback,
	guesses: [...state.guesses],
	number: state.number
});

export default connect(mapStateToProps)(Game);