import { render, screen, within } from '../../utils/test-utils'
import user from '@testing-library/user-event';
import { vi } from 'vitest'
import UserList from './UserList';

test('render one row per user', async  () => {
  const users = [{ name: 'jane', email: 'jane@jane.com' }, { name: 'sam', email: 'sam@sam.com' }];

  render(<UserList users={users} />);
  // screen.logTestingPlaygroundURL();

  const rows = await within(screen.getByTestId('users')).findAllByRole('row');
  expect(rows).toHaveLength(2);
});

test('render the email and name of each user', () => {
  
});