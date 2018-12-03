// represents the collection of thigns in app state


// import the {actions} we want to respond to (actually, just the consts for the ACTIONS)
import {
  GETTING_THINGS,
  RECEIVED_THINGS,
  ADDING_THING,
  UPDATING_THING,
  // THING_ADDED,
  // THING_UPDATED,
  THINGS_ERROR
} from '../actions/thingActions'

// this defines the structure of state.things (note things collection is things.things)
const initialState = {
  isFetching: false,
  things: [],
  error: null
}

// this is the reducer, to be provided to combineReducers
// reducers always receive state (by redux framework) 
//  and an action (of type, with optional payload) for reducers
//  to return the new state for things collection
export default function things(state = initialState, action) {
  switch (action.type) {
    case GETTING_THINGS: // called by thunk to set spinner to true
      return {
        ...state, // complete copy of current state
        isFetching: true
      }
    case RECEIVED_THINGS: // called by thunk to pass on received things
      return {
        ...state, // complete copy of current state
        things: action.things, // refresh list of things
        isFetching: false
      }
    case ADDING_THING: // called by thunk to set spinner to true
      return {
        ...state, // complete copy of current state
        isFetching: true
      }
    case UPDATING_THING: // called by thunk to set spinner to true
      return {
        ...state, // complete copy of current state
        isFetching: true
      }
    // case THING_ADDED: // called by thunk to set added thing into state things
    //   // though more likely to just call GET THINGS to get fresh list
    //   const addedThing = action.thing
    //   return {
    //     ...state, // complete copy of current state
    //     things: [...things, addedThing]
    //   }
    // case THING_UPDATED: // called by thunk to update thing in state things
    //   const updatedThing = action.thing
    //   return {
    //     ...state, // complete copy of current state
    //     things: state.things.map(thing => thing.id == updatedThing.id ? updatedThing : thing)
    //   }
    case THINGS_ERROR: // called by thunk to set spinner to true
      return {
        ...state, // complete copy of current state
        isFetching: false,
        message: action.error.message
      }
    default:
      return { ...state }  // can just return state?
  }
}