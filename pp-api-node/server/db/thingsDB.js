


const things = [{
    id: 1,
    name: 'Trailer',
    daily_rate_in_cents: 5000,
    owner_id: 1,
    qty: 1
},
{
    id: 2,
    name: 'Backpack',
    daily_rate_in_cents: 700,
    owner_id: 2,
    qty: 2
},
{
    id: 3,
    name: 'Sleeping bag',
    daily_rate_in_cents: 700,
    owner_id: 2,
    qty: 4
},
{
    id: 4,
    name: 'Party light set',
    daily_rate_in_cents: 8500,
    owner_id: 3
}
]


export function getThings(owner_id) {
    return things // to do filter by owner_id
}

export function getThing(id) {
    return things.find( thing => thing.id == id)
}

export function addThing(thing) {
  const highestIdInArray = things.map( thing => thing.id).reduce( (highestThingId, currentThingId) => {
    return Math.max(highestThingId, currentThingId)
  })
  thing.id = highestIdInArray + 1
  things.push(thing)
}

export function editThing(thing) {
    // toDo
}

export function deleteThing(id) {
  // chose to only send id through as this more like real world
  // find thing in our things array
  let result;
  const thing = things.find(thing => thing.id == id)
  if (thing) {
    const index = things.findIndex(thingElement => {
      return thingElement.id == thing.id
    })
    // delete from array
    things.splice(index, 1)
    result = 'Success'
  } else {
    result = 'Fail: no such thing to delete'
  }
  return result
}
