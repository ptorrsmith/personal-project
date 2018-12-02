// represents the collection of thigns in app state


// import the {actions} we want to respond to (actually, just the consts for the ACTIONS)
import {
  GET_THINGS,
  RECEIVE_THINGS,
  SAVE_THINGS,
  THING_SAVED,
  THINGS_ERROR
} from '../actions/thingActions'

// this defines the structure of state.things
const initialState = {
  isFetching: false,
  things: [],
  error: error
}

// this is the reducer, to be provided to combineReducers
// reducers always receive state (by redux framework) 
//  and an action (of type, with optional payload) for reducers
//  to return the new state for things collection
export default function things(state = initialState, action) {
  switch (action.type) {
    case GET_THINGS: // called by thunk to set spinner to true
      return {
        ...state, // complete copy of current state
        isFetching: true
      }
    case SAVE_THING: // called by thunk to set spinner to true
      return {
        ...state, // complete copy of current state
        isFetching: true
      }
    case RECEIVE_THINGS: // called by thunk to pass on received things
      return {
        ...state, // complete copy of current state
        things: action.things, // refresh list of things
        isFetching: false
      }
    case THING_SAVED: // called by thunk to set spinner to true
      return {
        ...state, // complete copy of current state
        isFetching: false
        // replace thing, or if not exist, add to collection
      }
    case GET_THINGS: // called by thunk to set spinner to true
      return {
        ...state, // complete copy of current state
        isFetching: true
      }
    default:
      return { ...state }  // can just return state?
  }
}