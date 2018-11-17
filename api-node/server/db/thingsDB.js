// EXPORTED FUNCTIONS

module.exports = {
  getThings,
  getThing,
  addThing,
  updateThing,
  deleteThing
}

let things = require('./data/things')

const config = require('../../knexfile').development // [environment]
const connection = require('knex')(config)

// returning promises to mock the knex asynchronous behaviour

function getThings(owner_id, db = connection) {

  return db('things').select() //.where('owner_id', owner_id)
}


// return new Promise((resolve, reject) => {
//   resolve(things.filter(thing => !owner_id || thing.owner_id == owner_id))
// })
// }


function getThing(id) {
  const thing = things.find(thing => thing.id == id)
  return new Promise((resolve, reject) => {
    resolve(thing)
  });

}

function addThing(thing) {
  const highestIdInArray = things.map(thing => thing.id).reduce((highestThingId, currentThingId) => {
    return Math.max(highestThingId, currentThingId)
  })
  thing.id = highestIdInArray + 1
  things.push(thing)
  return new Promise((resolve, reject) => {
    resolve(thing)
  })
}

function updateThing(thing) {
  // toDo
  const existingThing = things.find(thingItem => thingItem.id == thing.id)
  return new Promise((resolve, reject) => {
    if(existingThing) {
      const index = things.findIndex(thingItem => thingItem.id == existingThing.id)
      things.slice(index, 1, thing)
      resolve(thing)
    }
  })
}

function deleteThing(id) {
  // chose to only send id through as this more like real world
  // find thing in our things array
  let result;
  const thing = things.find(thing => thing.id == id)
  if(thing) {
    const index = things.findIndex(thingElement => {
      return thingElement.id == thing.id
    })
    // delete from array
    things.splice(index, 1)
    result = 'Success'
  }
  else {
    result = 'Fail: no such thing to delete'
  }
  return new Promise((resolve, reject) => {
    resolve(result)
  })
}
