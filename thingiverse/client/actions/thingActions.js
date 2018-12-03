// no need to import redux
// import libs/code for thunks

// will need to rename getThings 
// import { getThings } from '../api-client'
import api from '../api-client'


// import other actions we might want to dispatch

// export constants for ACTIONS

export const GETTING_THINGS = 'GETTING_THINGS' // ask API for things (plural)
export const RECEIVED_THINGS = 'RECEIVED_THINGS' // when receive full (?) refresh of things
export const ADDING_THING = 'ADDING_THING' // save new or update existing thing
export const UPDATING_THING = 'UPDATING_THING' // save new or update existing thing
// export const THING_ADDED = 'THING_ADDED' // when confirm things saved/updated, and receive it back
// export const THING_UPDATED = 'THING_UPDATED' // when confirm things saved/updated, and receive it back
export const THINGS_ERROR = 'THINGS_ERROR' // API error on get or save/update
// export const GET_THING = 'GET_THING' // ask API for things (singular)
// export const RECEIVE_THING = 'RECEIVE THING' // when receive requested thing

// make action creators, to wrap payload with action type

export function gettingThings(user) { // could pass in search options object instead
  return {
    type: GETTING_THINGS,
    user: user  // not sure this is needed.  
  }
}

export function receivedThings(things) {
  return {
    type: RECEIVED_THINGS,
    things: things
  }
}

export function addingThing(thing) {
  return {
    type: ADDING_THING,
    thing: thing
  }
}

export function updateThing(thing) {
  return {
    type: UPDATING_THING,
    thing: thing
  }
}

// export function thingAdded(thing) {
//   return {
//     type: THING_ADDED,
//     thing: thing
//   }
// }

// export function thingUpdated(thing) {
//   return {
//     type: THING_UPDATED,
//     thing: thing
//   }
// }

export function thingsError(error) {
  return {
    type: THINGS_ERROR,
    error: error
  }
}

// export function getThing(id) {
//   return {
//     type: GET_THING,
//     isFetching: true,
//     user: user
//   }
// }

// export function receiveThing(thing) {
//   return {
//     type: RECEIVE_THING,
//     isFetching: false,
//     thing: thing
//   }
// }


// THUNKS

export function fetchThings() {
  return dispatch => {
    dispatch(gettingThings()) // spinner
    api.getThings()
      .then(things => {
        // create RECEIVED_THINGS action with things payload
        dispatch(receivedThings(things))  // and thingsReducer will refresh state
      })
  }
}
