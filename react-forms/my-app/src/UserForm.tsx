import { useState } from 'react';

type User = {
  user: string;
  pass: string;
};
type Props = {
  formType: string;
  item?: User;
};

export function UserForm({ formType, item }: Props) {
  const [username, setUsername] = useState(item?.user ?? '');
  const [password, setPassword] = useState(item?.pass ?? '');

  const isCreating = item === undefined;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    item = {
      user: username,
      pass: password,
    };

    console.log(isCreating ? 'Created User:' : 'Edited User:');
    console.log('Username: ', item.user);
    console.log('Password: ', item.pass);
  }

  return (
    <div>
      <h3>Controlled {formType} Form</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>
            Username:
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
            />
          </label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
