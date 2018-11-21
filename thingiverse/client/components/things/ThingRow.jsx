import React from 'react'

import { Link } from 'react-router-dom'
// functional component for each table row


const ThingRow = (props) => {
  const thing = props.thing
  return (
    <tr>
      <td>{thing.id}</td>
      <td><Link to={`/thing/${thing.id}`}>{thing.name}</Link></td>
      <td>{thing.description}</td>
    </tr>
  )
}


export default ThingRow