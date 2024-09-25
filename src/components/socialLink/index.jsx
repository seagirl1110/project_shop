import styles from './styles.module.css';

function SocialLink({ name, url, size }) {
  return (
    <a
      style={{ width: size, height: size }}
      className={styles.link}
      target="_blank"
      href=""
    >
      <img src={url} alt={name} />
    </a>
  );
}

export default SocialLink;
