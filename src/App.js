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

  // deleting the user, function in which we will take the ID of the user and filter them out of the user array 
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
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
          <UserTable users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App