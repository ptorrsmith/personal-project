// no need to import redux
// import libs/code for thunks
// import other actions we might want to dispatch

// export constants for ACTIONS

export const GET_THINGS = 'GET_THINGS' // ask API for things (plural)
export const RECEIVE_THINGS = 'RECEIVE_THINGS' // when receive full (?) refresh of things
export const SAVE_THING = 'SAVE_THING' // save new or update existing thing
export const THING_SAVED = 'THING_SAVED' // when confirm things saved/updated, and receive it back
export const THINGS_ERROR = 'THINGS_ERROR' // API error on get or save/update
// export const GET_THING = 'GET_THING' // ask API for things (singular)
// export const RECEIVE_THING = 'RECEIVE THING' // when receive requested thing

// make action creators, to wrap payload with action type

export function getThings(user) {
  return {
    type: GET_THINGS,
    user: user
  }
}

export function receiveThings(things) {
  return {
    type: RECEIVE_THINGS,
    things: things
  }
}

export function saveThing(thing) {
  return {
    type: SAVE_THING,
    thing: thing
  }
}

export function thingsSaved(thing) {
  return {
    type: THING_SAVED,
    thing: thing
  }
}

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
