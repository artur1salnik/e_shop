import {combineReducers, createStore} from 'redux';
import {reducer} from './reducer';
import {reducer as formReducer} from 'redux-form';


const rootReducer = combineReducers({
    products: reducer,
    form: formReducer
})

const store = createStore(rootReducer)

export default store;