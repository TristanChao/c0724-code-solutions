import { useState } from 'react';
import './App.css';
import { Modal } from './Modal';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleDelete() {
    alert('Deleted!');
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Delete Me!</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        Are you sure you want to delete?
        <div>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </Modal>
    </>
  );
}
