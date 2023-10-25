import { render, screen, userEvent } from '../../utils/test-utils'
import user from '@testing-library/user-event';
import { vi } from 'vitest'
import UserList from './UserList';

test('render one row per user', () => {
  const users = [{ name: 'jane', email: 'jane@jane.com' }, { name: 'sam', email: 'sam@sam.com' }];

  render(<UserList users={users} />);
  // screen.logTestingPlaygroundURL();

  const rows = screen.getAllByRole('row');
  expect(rows).toHaveLength(2); // error: expected 2 to be 3
});

test('render the email and name of each user', () => {
  
});