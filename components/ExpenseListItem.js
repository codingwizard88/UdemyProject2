import React from 'react'

import { Link } from 'react-router-dom'
//we need the ability to remove listed expenses when the remove button is clicked, so we import the action for it.


//start with a stateless functional component that implicitly returns jsx
//we fill in all of the information by passing props in. Instead of saying 'props', we're desctructing..
//..to the various parameters
const ExpenseListItem = ({ id, description, amount, createdAt}) => (
<div>
<Link to={`/edit/${id}`}>
<h3>{description}</h3>
</Link>
    <p>{amount} - {createdAt}</p>
    
</div>
)

// we do this 'connect(something)' only when we want something from the state
export default ExpenseListItem
