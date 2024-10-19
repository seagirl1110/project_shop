import styles from './styles.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import banner from './../../assets/image/banner.png';
import Title from '../../components/title';
import Card from './../../components/card';

function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    try {
      const response = await axios.get(
        'https://66ced66e901aab24841fc56e.mockapi.io/productData'
      );
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.main_container}>
      <img src={banner} alt="UP TO 50% OFF" />
      <Title title="Товары" />
      <div className={styles.products}>
        {products.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Main;
