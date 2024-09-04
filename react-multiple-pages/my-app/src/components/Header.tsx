import { Link } from 'react-router-dom';

// type Props = {
//   onNavigate: (page: string) => void;
// };
export function Header(/*{ onNavigate }: Props*/) {
  return (
    <div>
      <nav className="px-4 text-white bg-gray-900">
        <ul>
          <li className="inline-block py-2 px-4">
            <div className="text-white">
              <Link to="/about">About</Link>
            </div>
          </li>
          <li className="inline-block py-2 px-4">
            <div className="text-white">
              <Link to="/">Dashboard</Link>
            </div>
          </li>
        </ul>
      </nav>
      {/* Page content goes here */}
    </div>
  );
}
