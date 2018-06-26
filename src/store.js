import { createStore } from 'redux';

import { guessReducer } from './reducers';

export default createStore(guessReducer);