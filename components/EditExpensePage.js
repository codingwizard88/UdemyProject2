import React from "react";
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {editExpense, removeExpense} from '../actions/expenses'

const EditExpensePage = props => {  
  return (
  <div>
  <ExpenseForm
  expense={props.expense}
onSubmit={(expense) => {
  //dispatch the action to edit the expense
  //we need to find the expense by ID even though we already already selected it and gotten to the edit page. This is because
  //we need to know the id of the array to edit in the store, as this is how the edit action identifies the array that needs editing...
//the editing action:
 // export const editExpense = (id, updates) => ({
 //   type: 'EDIT_EXPENSE',
 //   id,
 //   updates
//})

  props.dispatch(editExpense(props.expense.id, expense))
  //redirect to the dashboard
  props.history.push('/')
  console.log('updated',expense)
}}
  />

<button onClick={() => {
         props.dispatch(removeExpense({id:props.expense.id}))
         props.history.push('/')
    }}>Remove</button>
  </div>) 
}

const mapStateToProps = (state,props) => {
return {
  expense: state.expenses.find((expense) => {
    return expense.id === props.match.params.id;
  })
}
}

export default connect(mapStateToProps)(EditExpensePage)
