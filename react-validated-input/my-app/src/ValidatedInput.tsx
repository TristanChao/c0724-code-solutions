import React, { useState } from 'react';
import { FaCheck, FaXmark } from 'react-icons/fa6';
import './ValidatedInput.css';

export function ValidatedInput() {
  const [password, setPassword] = useState('');

  const specialChars = [
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    ';',
    '-',
    '_',
    '+',
    '=',
    '/',
    '?',
    '<',
    '>',
    '[',
    ']',
    '{',
    '}',
    '\\',
    '|',
  ];

  const errorArr: string[] = [];
  if (password.length === 0) {
    errorArr.push('no password');
  } else if (password.length < 8) {
    errorArr.push('too short');
  }

  let hasNoNums = true;
  let hasNoCapitals = true;
  let hasNoSpecialChars = true;
  for (let i = 0; i < password.length; i++) {
    if (Number(password[i]) || Number(password[i]) === 0) {
      hasNoNums = false;
    } else if (specialChars.includes(password[i])) {
      hasNoSpecialChars = false;
    } else if (password[i] === password[i].toUpperCase()) {
      hasNoCapitals = false;
    }
  }
  if (hasNoNums) errorArr.push('has no digits');
  if (hasNoCapitals) errorArr.push('has no capital letters');
  if (hasNoSpecialChars) errorArr.push('has no special characters');

  let errorMessage = '';
  if (errorArr.includes('no password')) {
    errorMessage = 'Password is required.';
  } else if (errorArr.length) {
    errorMessage = 'Password ' + errorArr.join(', ');
    errorMessage += '.';
  }

  const xmarkClass = errorArr.length ? '' : 'hidden';
  const checkClass = errorArr.length ? 'hidden' : '';

  return (
    <div className="container">
      <p>Password</p>
      <div className="flex align-center">
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          value={password}
          type="password"
        />
        <FaXmark className={`xmark ${xmarkClass}`} />
        <FaCheck className={`check ${checkClass}`} />
      </div>
      <p className="error-label">{errorMessage}</p>
    </div>
  );
}
