import { useState } from 'react';

export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log('Username: ', username);
    console.log('Password: ', password);
  }

  return (
    <div>
      <h3>Controlled Form</h3>
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
