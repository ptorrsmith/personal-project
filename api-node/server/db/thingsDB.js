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

// this was mocking the database
// return new Promise((resolve, reject) => {
//   resolve(things.filter(thing => !owner_id || thing.owner_id == owner_id))
// })
// }


function getThing(id, db = connection) {
  return db('things').select().where('id', id).first()

  // const thing = things.find(thing => thing.id == id)
  // return new Promise((resolve, reject) => {
  //   resolve(thing)
  // });

}

function addThing(thing, db = connection) {

  // db('things').insert('name', )

  // console.log("thing posted: >>>>>>>>>>>> ", thing)

  const {
    name,
    description,
    daily_rate_in_cents,
    owner_member_id,
    quantity
  } = thing
  const rawThing = { name, description, daily_rate_in_cents, owner_member_id, quantity }

  // const rawThing = Object.assign({}, thing)


  // console.log("Raw thing: >>>>>>>>>>>> ", rawThing)

  return db('things').insert(rawThing)


  // const highestIdInArray = things.map(thing => thing.id).reduce((highestThingId, currentThingId) => {
  //   return Math.max(highestThingId, currentThingId)
  // })
  // thing.id = highestIdInArray + 1
  // things.push(thing)
  // return new Promise((resolve, reject) => {
  //   resolve(thing)
  // })
}

function updateThing(thing, db = connection) {
  const {
    name,
    description,
    daily_rate_in_cents,
    owner_member_id,
    quantity
  } = thing
  const rawThing = { name, description, daily_rate_in_cents, owner_member_id, quantity }

  return db('things').update(rawThing).where('id', thing.id)
  // const existingThing = things.find(thingItem => thingItem.id == thing.id)
  // return new Promise((resolve, reject) => {
  //   if(existingThing) {
  //     const index = things.findIndex(thingItem => thingItem.id == existingThing.id)
  //     things.slice(index, 1, thing)
  //     resolve(thing)
  //   }
  // })
}

function deleteThing(id, db = connection) {
  // chose to only send id through as this more like real world

  return db('things').delete().where('id', id)

  // let result;
  // const thing = things.find(thing => thing.id == id)
  // if(thing) {
  //   const index = things.findIndex(thingElement => {
  //     return thingElement.id == thing.id
  //   })
  //   // delete from array
  //   things.splice(index, 1)
  //   result = 'Success'
  // }
  // else {
  //   result = 'Fail: no such thing to delete'
  // }
  // return new Promise((resolve, reject) => {
  //   resolve(result)
  // })
}
