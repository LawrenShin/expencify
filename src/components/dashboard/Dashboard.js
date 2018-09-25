import React from 'react';
import ExpenceList from './expence_list/ExpenceList';
import ExpenceListFilters from './expence_list/ExpenceListFilters';
import ExpensesSummary from './expence_list/ExpensesSummary';

const Dashboard = () => (
  <div>
    <h1>Dashboard page</h1>
    <ExpenceListFilters />
    <ExpenceList />
    <ExpensesSummary />
  </div>
);

export default Dashboard;