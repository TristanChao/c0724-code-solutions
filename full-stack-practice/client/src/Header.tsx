import { Link, Outlet } from 'react-router-dom';
import './Header.css';

export function Header() {
  return (
    <>
      <div className="header">
        <Link to="about">About</Link>
        <Link to="/">Catalog</Link>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </>
  );
}
