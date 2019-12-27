import { createStore, applyMiddleware, combineReducers } from 'redux';
import { middleWare, apiReducer, railsActions } from 'redux-rails';
import { default as thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { 
    SET_LOADING_STATUS,
} from './components/actions'
import update from 'immutability-helper';

const initialState = {
    currentUser: {},
    isLoading: false
};

function isLoading(state = false, action) {
    switch (action.type) {
        case SET_LOADING_STATUS:
            console.log("Loading Set To: ", action.isLoading);
            return action.isLoading;
        default:
            return state;
    }
}

function currentUser(state = {}, action) {
    return state;
}

const rootReducer = combineReducers({
    currentUser,
    isLoading
})

export default function configureStore(hydratedState = {}) {
    const store = createStore(
        rootReducer, 
        {...initialState, ...hydratedState},
        composeWithDevTools (
            applyMiddleware(thunk)
        )
    );
    return store;
}
