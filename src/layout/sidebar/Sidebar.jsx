import { Link, NavLink } from 'react-router-dom';
import './Sidebar.scss';
import logo from "../../assets/images/logo.svg";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to="/" className='sidebar__logo'>
        <img src={logo} alt="picture" />
      </Link>

      <ul className='sidebar__list'>
        <li>
          <NavLink end className={({isActive}) => isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"} to="/admin">
            Main
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"} to="/admin/create">
            Create
          </NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"} to="/admin/articles">
            Article
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar