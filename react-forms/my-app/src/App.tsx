import { RegistrationFormControlled } from './RegistrationFormControlled.tsx';
import { RegistrationFormUncontrolled } from './RegistrationFormUncontrolled.tsx';
import './App.css';

export default function App() {
  return (
    <>
      <RegistrationFormUncontrolled />
      <RegistrationFormControlled />
    </>
  );
}
