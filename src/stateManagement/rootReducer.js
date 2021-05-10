import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initState = {
    isAuth : false,
    user: {},
    cases:[]
    
}





const rootReducer = (state=initState, action) => {

    switch (action.type) {
        case 'LOGGED_IN':
            return {
                ...state,
                isAuth: action.isAuth
            }
            
        case 'LOGOUT':
            return {
                ...state,
                isAuth: action.isAuth
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'SET_CASES':
            return {
                ...state,
                cases: action.cases
            }

    
        default:
            return state
    }
};





export default rootReducer