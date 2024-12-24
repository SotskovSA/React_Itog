import React from 'react';
import styles from './Sales.module.css';
import {useNavigate} from "react-router-dom";

function Sales() {
  const navigate = useNavigate(); // Хук для навигации

  const handleNavigation = () => {
    navigate('/all-sales'); // Переход на адрес "/categories"
  };
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Sale</h2>
        <div className={styles.btnGroup}>
          <div className={styles.divider} />
          <button className={styles.navigation} onClick={handleNavigation}>All sales</button>
        </div>
      </div>
      <div className={styles.list}>
        {[
          {
            src: '/images/sale1.jpeg', alt: 'Savannah Summer Annual Collection', 
            title: 'Savannah Summer Annual Collection',
            price: '$50', original: '$53', discount: '-5%'
          },
          {
            src: '/images/sale2.jpeg', alt: 'Angelonia Angelissa™ Rose', 
            title: 'Angelonia Angelissa™ Rose',
            price: '$12,1', original: '$12,95', discount: '-6%'
          },
          {
            src: '/images/sale3.jpeg', alt: 'Salvia `Wendy`s Wish`', 
            title: 'Salvia `Wendy`s Wish`',
            price: '$11,1', original: '$11,5', discount: '-3%'
          },
          {
            src: '/images/sale4.jpeg', alt: 'Amaryllis "Samba," one bulb in ceramic cachepot',
            title: 'Amaryllis "Samba," one bulb in ceramic cachepot',
            price: '$65', original: '$69', discount: '-5%'
          }
        ].map((item, index) => (
          <div key={index} className={styles.item}>
            <img src={item.src} alt={item.alt} className={styles.image} />
            <div className={styles.text}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <div className={styles.price}>
                <span className={styles.amount}>{item.price}</span>
                <span className={styles.originalPrice}>{item.original}</span>
              </div>
            </div>
            <div className={styles.discount}>{item.discount}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sales;