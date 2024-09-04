import { useState } from 'react';
import { About } from './pages/About';
import { Dashboard } from './pages/Dashboard';
import { Header } from './components/Header';
import { NotFound } from './pages/NotFound';
import { Details } from './pages/Details';
import { Route, Routes } from 'react-router-dom';

export function App() {
  // const [page, setPage] = useState('dashboard');
  const [itemId, setItemId] = useState<number>();

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Dashboard onDetails={(id) => setItemId(id)} />}
        />
        <Route path="about" element={<About />} />
        <Route path="details/:itemId" element={<Details itemId={itemId} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
