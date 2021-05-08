import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initState = {
    isAuth : false,
    user: {},
    cases:[]
    
}


const persistConfig = {
    key: "root",
    storage,
    whitelist: ['rootReducer']
}

const rootReducer = (state=initState, action) => {

    if(action.type === 'LOGGED_IN'){
        return {
            ...state,
            isAuth: action.isAuth
        }
    }

    if(action.type === 'LOGOUT'){
        return {
            ...state,
            isAuth: action.isAuth
        }
    }

    if(action.type === 'SET_USER'){
        return {
            ...state,
            user: action.user
        }
    }

    if(action.type === 'SET_CASES'){
        return {
            ...state,
            cases: action.cases
        }
    }


    

};

export default persistReducer(persistConfig ,rootReducer);