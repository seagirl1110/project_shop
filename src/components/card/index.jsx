import styles from './styles.module.css';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions';

function Card({ product, addProductToCart }) {
  const { image, name, price } = product;

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
          <button
            onClick={() => addProductToCart(product)}
            className={styles.card_btn}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (product) => dispatch(addToCart(product)),
});

export default connect(null, mapDispatchToProps)(Card);
