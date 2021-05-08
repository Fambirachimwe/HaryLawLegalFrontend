import rootReducer from './rootReducer';

import {persistStore} from 'redux-persist'

import { applyMiddleware, createStore } from 'redux';
 
// Logger with default options
import logger from 'redux-logger';


const store = createStore(
  rootReducer, // persistedReducer
  applyMiddleware(logger)
)



// export const store = createStore(rootReducer);
const  persistor = persistStore(store);

export  {store, persistor};