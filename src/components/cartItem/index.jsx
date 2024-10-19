import styles from './styles.module.css';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions';
import remove_product from './../../assets/icon/remove_product.svg';

function CartItem({ item, removeProductFromCart }) {
  const { image, name, price, id } = item;
  return (
    <div className={styles.card}>
      <img className={styles.card_img} src={image} alt="product_image" />
      <div className={styles.card_inner}>
        <div className={styles.card_content}>
          <h3 className={styles.card_title}>{name}</h3>
          <div className={styles.card_price_wrapper}>
            <p className={styles.card_price_title}>Цена:</p>
            <p className={styles.card_price}>{price} €</p>
          </div>
        </div>
        <button
          onClick={() => removeProductFromCart(id)}
          className={styles.card_btn}
        >
          <img src={remove_product} alt="delete" />
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeProductFromCart: (product) => dispatch(removeFromCart(product)),
});

export default connect(null, mapDispatchToProps)(CartItem);
