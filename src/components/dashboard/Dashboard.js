import React from 'react';
import ExpenceList from './expence_list/ExpenceList';
import ExpenceListFilters from './expence_list/ExpenceListFilters';

const Dashboard = () => (
  <div>
    <h1>Dashboard page</h1>
    <ExpenceListFilters />
    <ExpenceList />
  </div>
);

export default Dashboard;