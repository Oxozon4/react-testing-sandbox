import { render, screen, userEvent } from '../../utils/test-utils'
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows two inputs and a button', () => {
  render(<UserForm onUserAdd={() => {}}/>);
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');
  expect(inputs.length).toBe(2);
  expect(button).toBeInTheDocument();
});

