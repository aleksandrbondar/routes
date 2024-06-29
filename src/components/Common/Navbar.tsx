import { NavLink } from 'react-router-dom';
import { routes, RouteInterface } from '../App/App';

const Navbar = () => {


  return (
    <nav>
      <ul>
        {routes.filter((route: RouteInterface) => route.path !== "*")
          .map((route: RouteInterface, index: number) => (
            <li key={index}>
              <NavLink
                to={route.path}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {route.name}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Navbar;