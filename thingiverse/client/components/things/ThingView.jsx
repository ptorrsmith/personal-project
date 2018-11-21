import React from 'react'


// functional component for each table row


const ThingView = (props) => {
  console.log("ThingView props thing: ", props)
  const id = props.match.params.id
  // const thing = props.things.find(thing => thing.id == id)
  const thing = props.thing
  console.log("Thing:", thing)
  return(
    <div className="thing-wrapper grid">
    <h2>{thing && thing.name}</h2>
    <p>{thing && thing.id} </p>
    <p>{thing && thing.description}</p>
    </div>
  )
}

export default ThingView
