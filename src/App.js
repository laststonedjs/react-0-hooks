import React, { useState } from 'react'
// components
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
// data
import { usersData } from './data/dummy';

const App = () => {
  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  // since we don't know who is being edited until it's selected, we'll create initial empty state
  const initialFormState = { id: null, name: '', username: '' };
  // here we want to see and update who the current user being edited is
  const [currentUser, setCurrentUser] = useState(initialFormState);

  // this function take a 'user' object as a parameter and add them to the users array of objects
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

  // deleting the user, function in which we will take the ID of the user and filter them out of the user array 
  const deleteUser = (id) => {
    setEditing(false);

    setUsers(users.filter((user) => user.id !== id))
  }

  // edit and update the user
  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  }

  // function that will get called when the edit form is submitted
  // we'll use a ternary operation to map through the users and find the one we want to update
  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  }

  return (
    <div className="container">
      <h1>React-O-Hooks</h1>
      <div className="flex-row">

        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <h2>View users</h2>
        <UserTable
          users={users}
          deleteUser={deleteUser}
          editRow={editRow}
        />
      </div>
    </div>
  )
}

export default App