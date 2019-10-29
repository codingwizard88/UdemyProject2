import uuid from 'uuid'

// these are called (in our code) 'action' because the 2nd parameter of the reducer is typed 'action'
//so it becomes easy to refer to anything inside these 'action' using action.id, or action.type when we're inside a reducer

//ADD_EXPENSE
//This is an action generator
//First, define the default values of the parameters of the action generator
export const addExpense = (
    //this is the default (initial) values of the expense parameters.
    {
         description = '',
          note ='',
           amount = 0,
            createdAt=0
        } = {}
        ) => ({

    //2 objects; type and expense. Expense is an array consisting of id, description, etc.
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

//when removing expense, the only parameter we need, aside from type, is the ID, that's it.
//?why use this syntax '({ id } = {})', which we also used in addExpense(but with different parameters) vs the..
//.. syntax in the editExpense '(id, updates)'
export const removeExpense = ({ id } = {}) => ({
 type: 'REMOVE_EXPENSE',
 id
})

//EDIT_EXPENSE


export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})