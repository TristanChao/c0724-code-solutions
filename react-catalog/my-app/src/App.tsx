import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './Header';
import { Catalog } from './Catalog';
import { About } from './About';
import { Details } from './Details';
import { NotFound } from './NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Catalog />} />
        <Route path="about" element={<About />} />
        <Route path="details/:productId" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
