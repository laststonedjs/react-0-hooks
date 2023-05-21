import React, { useState } from 'react'
// components
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm';
// data
import { usersData } from './data/dummy';

const App = () => {
  const [users, setUsers] = useState(usersData);

  // this function take a 'user' object as a parameter and add them to the users array of objects
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

  return (
    <div className="container">
      <h1>React-O-Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  )
}

export default App