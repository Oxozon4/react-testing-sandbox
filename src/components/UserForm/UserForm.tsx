import { useState } from 'react';

interface UserFormProps {
  onUserAdd: (user: { name: string, email: string }) => void;
}

const UserForm = ({ onUserAdd }: UserFormProps) => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onUserAdd({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input value={name} type='text' onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email</label>
        <input value={email} type='text' onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button type='submit'>Add User</button>
    </form>
  );
}

export default UserForm;
