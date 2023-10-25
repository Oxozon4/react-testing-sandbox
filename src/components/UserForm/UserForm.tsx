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
        <label htmlFor='name'>Name</label>
        <input id='name' value={name} type='text' onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input id='email' value={email} type='text' onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button>Add User</button>
    </form>
  );
}

export default UserForm;
