import styles from './styles.module.css';
import facebook from './../../assets/icon/facebook.svg';
import twitter from './../../assets/icon/twitter.svg';
import instagram from './../../assets/icon/instagram.svg';
import SocialLink from './../socialLink';

const socialLinkColl = [
  { name: 'facebook', url: facebook },
  { name: 'twitter', url: twitter },
  { name: 'instagram', url: instagram },
];

function Footer() {
  return (
    <footer className={styles.footer_wrapper}>
      <div className={styles.footer_inner}>
        <div className={styles.footer_row}>
          <div className={styles.contacts}>
            <h6 className={styles.contacts_title}>Контакты</h6>
            <a className={styles.contacts_item} href="tel:8 800 000 00 00">
              8 800 000 00 00
            </a>
            <a
              className={styles.contacts_item}
              href="mailto:emailexample@email.com"
            >
              emailexample@email.com
            </a>
          </div>
          <div className={styles.social}>
            {socialLinkColl.map((item) => (
              <SocialLink key={item.name} {...item} size={32} />
            ))}
          </div>
        </div>
        <div className={styles.footer_row}>
          <p className={styles.copywrite}>
            2024 Сникер-магазин. Все права защищены
          </p>
          <input
            className={styles.input}
            type="text"
            placeholder="Введите свой email:"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
