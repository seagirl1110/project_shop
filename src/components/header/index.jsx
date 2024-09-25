import styles from './styles.module.css';
import logo from './../../assets/icon/logo.svg';
import NavItem from './navItem';

const navList = [
  { name: 'Главная', path: '/' },
  { name: 'Корзина', path: '/cart' },
  { name: 'Контакты', path: '/contacts' },
];

function Header() {
  return (
    <header className={styles.header_wrapper}>
      <div className={styles.header_inner}>
        <img src={logo} alt="Сникер - магазин" />
        <nav className={styles.nav_container}>
          {navList.map((item) => (
            <NavItem key={item.name} {...item} />
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
