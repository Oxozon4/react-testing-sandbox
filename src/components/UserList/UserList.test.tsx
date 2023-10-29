import { render, within, screen } from '../../utils/test-utils';
import UserList from './UserList';

const renderComponent = () => {
  const users = [
    { name: 'jane', email: 'jane@jane.com' },
    { name: 'sam', email: 'sam@sam.com' },
  ];
  render(<UserList users={users} />);
  return { users };
};

test('render one row per user', async () => {
  renderComponent();
  const rows = await within(screen.getByTestId('users')).findAllByRole('row');

  // Alternative
  // const rows = container.querySelectorAll('tbody tr');
  // screen.logTestingPlaygroundURL();

  expect(rows).toHaveLength(2);
});

test('render the email and name of each user', () => {
  const { users } = renderComponent();
  users.forEach((user) => {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});
