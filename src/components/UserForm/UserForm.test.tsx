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

test('it calls onUserAdd when the form is submitted', () => {
  const argList: any = [];
  const callback = (...args: any) => {
    argList.push(args)
  }
  render(<UserForm onUserAdd={callback} />);

  const [nameInput, emailInput] = screen.getAllByRole('textbox');

  user.click(nameInput);
  user.keyboard('John Doe');

  user.click(emailInput);
  user.keyboard('john@doe.com');

  const button = screen.getByRole('button');
  user.click(button);

  expect(argList).toHaveLength(1);
  expect(argList[0][0]).toEqual({ name: 'John Doe', email: 'john@doe.com'});

});