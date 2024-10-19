import styles from './styles.module.css';
import { connect } from 'react-redux';
import Title from '../../components/title';
import CartItem from '../../components/cartItem';

function Cart({ cartProducts }) {
  const priceTotal = cartProducts.reduce((acc, item) => {
    acc += +item.price;
    return acc;
  }, 0);

  return (
    <div className={styles.main_container}>
      <Title title="Корзина" />
      <div className={styles.cart_inner}>
        {cartProducts.length === 0 ? (
          <h3>Ваша корзина пуста...</h3>
        ) : (
          <div className={styles.cart_content}>
            <div className={styles.cart_list}>
              {cartProducts.map((item) => {
                return <CartItem key={item.id} item={item} />;
              })}
            </div>
            <div className={styles.cart_info}>
              <h3 className={styles.cart_subtitle}>Итого</h3>
              <div className={styles.cart_products}>
                {cartProducts.map((item) => {
                  return (
                    <div className={styles.cart_product_name} key={item.id}>
                      {item.name}
                    </div>
                  );
                })}
              </div>
              <p className={styles.cart_price_title}>Цена:</p>
              <p className={styles.cart_price_total}>{priceTotal} €</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartProducts: state.cart,
});

export default connect(mapStateToProps)(Cart);
