import { Link, Outlet } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import { useState } from 'react';

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
};
export function AppDrawer({ menuItems }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex w-screen">
      <nav
        className={`inline-block py-2 px-4 w-[250px] border-2 border-solid mr-4 transition-[width] duration-300 ${
          isMenuOpen ? 'w-[250px]' : 'w-[90px]'
        }`}>
        <IoMenu
          className="w-10 h-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        {isMenuOpen && <h1 className="text-2xl">Hylian Shopping</h1>}
        <ul>
          {menuItems.map((menu) => (
            <li key={menu.name} className="py-2 px-4">
              <Link to={menu.path} className="text-black">
                <img
                  src={menu.iconUrl}
                  alt={`${menu.name} icon`}
                  className="w-5 h-4 inline mr-3"
                />
                {isMenuOpen && menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
}
