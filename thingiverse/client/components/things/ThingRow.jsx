import React from 'react'

// functional component for each table row


const ThingRow = (props) => {
  const thing = props.thing
  return (
    <tr>
      <td>{thing.id}</td>
      <td>{thing.name}</td>
      <td>{thing.description}</td>
      <td>{thing.daily_rate_in_cents / 100}</td>
    </tr>
  )
}


export default ThingRow