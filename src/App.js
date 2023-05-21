import React from 'react'
// components
import UserTable from './tables/UserTable'

const App = () => {
  return (
    <div className="container">
      <h1>React-O-Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable />
        </div>
      </div>
    </div>
  )
}

export default App