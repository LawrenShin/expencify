export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expence) => {
    const startDateMatch = typeof startDate !== 'number' || expence.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expence.createdAt <= endDate;
    const textMatch = typeof text !== 'string' || expence.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b) => {
    if(sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1 : -1;
    }else if(sortBy === 'amount'){
      return a.amount < b.amount ? 1 : -1;
    }
  })
};