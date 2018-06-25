import * as actions from '../actions';

const initialState = {
	feedback: "Make your guess!",
	guesses: [],
	number: Math.ceil(Math.random() * 100);
};

const parseFeedback = (state, action) => {
	const range = Math.abs(state.number - action.guess);
	if(range === 0) {
		return `You guessed the number ${this.number}!
				It took you ${state.guesses.length+1} guesses`;
	} else if(range <= 5) {
		return `You're burning up!!`;
	} else if(range <= 10) {
		return `You're hot!`;
	} else if(range <= 20) {
		return `You're warm`;
	} else if(range <= 30) {
		return `You're cold`;
	} else {
		return `Brrrr! You're freezing!`;
	}
};

export const guessReducer = (state=initialState, action) => {
	if (action.type === SUBMIT_GUESS) {
		return Object.assign({}, state, {
			feedback: parseFeedback(state, action),
			guesses: [...state.guesses, Number(action.guess)]
		});
	}
	return state;
}