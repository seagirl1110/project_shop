import styles from './styles.module.css';

function Card({ image, name, price, id }) {
  return (
    <div className={styles.card}>
      <img className={styles.card_img} src={image} alt="product_image" />
      <div className={styles.card_content}>
        <h3 className={styles.card_title}>{name}</h3>
        <div className={styles.card_inner}>
          <div>
            <p className={styles.card_price_title}>Цена:</p>
            <p className={styles.card_price}>{price} €</p>
          </div>
          <button className={styles.card_btn}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
