import React from 'react';
 
import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {

	constructor(props) {
		super(props);
		this.number = Math.ceil(Math.random() * 100);
		console.log(this.number);
		this.temperature = {
			freezing: 40,
			cold: 30,
			warm: 20,
			hot: 10,
			burning: 5
		};
		this.state = {
			feedback: "Make your guess!",
			guesses: [],
			gameOver: false
		};
	}

	onGuessSubmit(e) {
		e.preventDefault();
		const guess = document.getElementById("userGuess").value;
		let gameOver = false;
		if(guess !== "" && Number(guess)) {
			const range = Math.abs(Number(guess) - this.number);
			let feedback = '';
			if(range === 0) {
				feedback = `You guessed the number ${this.number}!
				It took you ${this.state.guesses.length+1} guesses`;
				gameOver = true;
			} else if(range <= this.temperature.burning) {
				feedback = `You're burning up!!`;
			} else if(range <= this.temperature.hot) {
				feedback = `You're hot!`;
			} else if(range <= this.temperature.warm) {
				feedback = `You're warm`;
			} else if(range <= this.temperature.cold) {
				feedback = `You're cold`;
			} else {
				feedback = `Brrrr! You're freezing!`;
			}

			this.setState({
				feedback,
				guesses: this.state.guesses.concat(Number(guess)),
				gameOver
			});
		}
	}

    render() {
    	return (
	        <div>
	            <Header />
	            <GuessSection 
	            	feedback={this.state.feedback} 
	            	onSubmit={e => this.onGuessSubmit(e)} />
	            <GuessCount count={this.state.guesses.length} />
	            <GuessList guesses={this.state.guesses} />
	        </div>
    	);
    }
}

