import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from './root-saga';

// root reducer
import { rootReducer } from './root-reducer';
// import { loggerMiddleware } from './middleware/logger';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']     // reducer that you want to persist
}

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [
    process.env.NODE_ENV !== 'production' && logger,
    sagaMiddleware,
].filter(Boolean);


const composeEnhancer =
    (process.env.NODE_ENV !== 'production' &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))

// this store object will going to pass to the Provide (index.js file)
export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)


// export const thunkMiddleware = (state) => (next) => (action) => {
//     if (typeof (action === 'function')) {
//         action(dispatch)
//     }
// }