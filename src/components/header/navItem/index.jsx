import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';

function NavItem({ name, path }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? `${styles.link} ${styles.link__active}` : `${styles.link}`
      }
    >
      {name}
    </NavLink>
  );
}

export default NavItem;
