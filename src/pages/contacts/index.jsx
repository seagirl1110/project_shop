import styles from './styles.module.css';
import snapchat from './../../assets/icon/snapchat.svg';
import facebook from './../../assets/icon/facebook_color.svg';
import x from './../../assets/icon/x.svg';

function Contacts() {
  return (
    <div className={styles.main_container}>
      <div className={styles.content}>
        <ul className={styles.info}>
          <li className={styles.info_item}>8 800 000 00 00</li>
          <li className={styles.info_item}>emailexample@email.com</li>
        </ul>
        <div className={styles.inner}>
          <form className={styles.form} action="">
            <div className={styles.form_inner}>
              <input
                className={styles.fort_item}
                type="text"
                placeholder="Ваш email"
              />
              <input
                className={styles.fort_item}
                type="text"
                placeholder="Ваше имя"
              />
            </div>
            <textarea
              className={`${styles.fort_item} ${styles.fort_item_textarea}`}
              placeholder="Введите сообщение"
            />
            <button className={styles.form_btn} type="submit">
              Отправить
            </button>
          </form>
          <div className={styles.social}>
            <div className={styles.social_title}>Найдите нас:</div>
            <div className={styles.social_list}>
              <a href="" target="_blank">
                <img src={snapchat} alt="snapchat" />
              </a>
              <a href="" target="_blank">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="" target="_blank">
                <img src={x} alt="x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
