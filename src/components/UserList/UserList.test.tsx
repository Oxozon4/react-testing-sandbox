import { render, screen, userEvent } from '../../utils/test-utils'
import user from '@testing-library/user-event';
import { vi } from 'vitest'
import UserList from './UserList';

test('render one row per user', () => {
  const users = [{ name: 'jane', email: 'jane@jane.com' }, { name: 'sam', email: 'sam@sam.com' }];

  render(<UserList users={users} />);

  screen.logTestingPlaygroundURL();
});

test('render the email and name of each user', () => {
  
});