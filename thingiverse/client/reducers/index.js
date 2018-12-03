import { combineReducers } from 'redux' // just the combine reducers property/function
// import other reducers
import things from './thingsReducer'


export default combineReducers({
  things
})