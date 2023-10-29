import { render, within, screen } from '../../utils/test-utils';
import user from '@testing-library/user-event';
import { vi } from 'vitest';
import UserList from './UserList';

test('render one row per user', async () => {
  const users = [
    { name: 'jane', email: 'jane@jane.com' },
    { name: 'sam', email: 'sam@sam.com' },
  ];

  render(<UserList users={users} />);
  const rows = await within(screen.getByTestId('users')).findAllByRole('row');

  // Alternative
  // const rows = container.querySelectorAll('tbody tr');
  // screen.logTestingPlaygroundURL();

  expect(rows).toHaveLength(2);
});

test('render the email and name of each user', () => {});
