import React from 'react';
import styles from './CategoryShortList.module.css';
import {useNavigate} from "react-router-dom";

function CategoryShortList() {
  const navigate = useNavigate(); // Хук для навигации

  const handleNavigation = () => {
    navigate('/categories'); // Переход на адрес "/categories"
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Categories</h2>
        <div className={styles.btnGroup}>
          <div className={styles.divider} />
          <button className={styles.navigation} onClick={handleNavigation}>
            All categories
          </button>
        </div>
      </div>
      <div className={styles.list}>
        {[
          { src: '/images/category1.jpeg', alt: 'Annuals', label: 'Annuals' },
          { src: '/images/category2.jpeg', alt: 'Nursery', label: 'Nursery' },
          { src: '/images/category3.jpeg', alt: 'Garden Art', label: 'Garden Art' },
          { src: '/images/category4.jpeg', alt: 'Plant Care', label: 'Plant Care' }
        ].map((item, index) => (
          <div key={index} className={styles.category}>
            <img src={item.src} alt={item.alt} className={styles.image} />
            <div className={styles.label}>{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryShortList;