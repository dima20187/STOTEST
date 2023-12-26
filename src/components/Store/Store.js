
// import { combineReducers,applyMiddleware,createStore } from "redux";

// import thunk from "redux-thunk";
// import userReducer from "../reduxDima/Slice";

// const rootReducer = combineReducers({
// user: userReducer,
// })
// export const Store = createStore(rootReducer,applyMiddleware(thunk))


import AsyncStorage from '@react-native-async-storage/async-storage'
import { createStore,combineReducers,applyMiddleware, } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import userReducer from "../reduxDima/Slice"
import thunk from "redux-thunk";

const rootReducer = combineReducers({
     user: userReducer,
     })

const persisConfig={
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persisConfig,rootReducer)

export const Store = createStore(persistedReducer,applyMiddleware(thunk))
 export  const persisted =  persistStore(Store)