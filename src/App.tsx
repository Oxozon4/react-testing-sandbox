import { useState } from 'react'
import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';

import './App.css'

function App() {
  const [users, setUsers] = useState<{ name: string, email: string }[]>([]);

  const onUserAdd = (user: { name: string, email: string }) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      learn react
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </div>
  )
}

export default App
