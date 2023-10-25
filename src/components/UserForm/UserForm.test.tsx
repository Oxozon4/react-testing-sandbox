import { render, screen, userEvent } from '../../utils/test-utils'
import user from '@testing-library/user-event';
import { vi } from 'vitest'
import UserForm from './UserForm';

test('it shows two inputs and a button', () => {
  render(<UserForm onUserAdd={() => {}}/>);
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');
  expect(inputs.length).toBe(2);
  expect(button).toBeInTheDocument();
});

test('it calls onUserAdd when the form is submitted', async () => {
  const mock = vi.fn();

  render(<UserForm onUserAdd={mock} />);

  const [nameInput, emailInput] = screen.getAllByRole('textbox');

  await user.click(nameInput);
  await user.keyboard('John Doe');

  await user.click(emailInput);
  await user.keyboard('john@doe.com');

  const button = screen.getByRole('button');
  await user.click(button);

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: 'John Doe', email: 'john@doe.com'});
});