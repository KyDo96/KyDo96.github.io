import {combineReducers} from 'redux'
import authPageReducer from '../containers/authPage/modules/reducer'
const rootReducer=combineReducers({
    authPageReducer,
})

export default rootReducer;