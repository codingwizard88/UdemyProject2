import moment from 'moment'
//Get visible expenses
// expenses: the complete list of stored arrays of expenses
//filters
//expenses contains the actual array of data we entered while the other parameters are the deconstruction of the..
//..filter array
//this function takes in the array of expenses and the various filter parameters and returns filtered and sorted array.
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        //we're utilizing moment() to help us filter dates. We will use moment for anything related ot date or time.
        //convert createdAt to a moment so we can utilize moment with it moving forward.
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment,'day') : true
        const endDateMatch = endDate? endDate.isSameOrAfter(createdAtMoment,'day') : true
        
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy === 'date') {
            //if the result is 1 then they get swapped
            //so we want to get the most recent first in order
            return a.createdAt < b.createdAt ? 1 :  -1
        } else if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}