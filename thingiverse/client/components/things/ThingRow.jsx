import React from 'react'

import { Link } from 'react-router-dom'
// functional component for each table row

import { connect } from 'react-redux'


// functional component as does not need local state
const ThingRow = (props) => {
  const thing = props.thing
  return (
    <tr>
      <td>{thing.id}</td>
      <td><Link to={`/things/${thing.id}`}>{thing.name}</Link></td>
      <td>{thing.description}</td>
    </tr>
  )
}


// not needed yet, but perhpas if have a delete button next to it in future

// const mapDispatchToProps = (dispatch) => {
//   return {

//   }
// }

// export default connect(mapDispatchToProps)(ThingRow)
export default ThingRow
