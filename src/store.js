import {configureStore,combineReducers} from '@reduxjs/toolkit'
import {batReducer,ballReducer} from './reducer'

const rootReducer =combineReducers({bat:batReducer,ball:ballReducer})

const store = configureStore ({reducer:rootReducer})

export default store

