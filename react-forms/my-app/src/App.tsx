import { RegistrationFormControlled } from './RegistrationFormControlled.tsx';
import { RegistrationFormUncontrolled } from './RegistrationFormUncontrolled.tsx';
import { UserForm } from './UserForm.tsx';
import './App.css';

export default function App() {
  return (
    <>
      <RegistrationFormUncontrolled />
      <RegistrationFormControlled />
      <UserForm formType="Create" />
      <UserForm formType="Edit" item={{ user: 'Joe', pass: 'BillyBob18' }} />
    </>
  );
}
