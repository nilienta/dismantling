import React from 'react';
import styles from './service-card.module.css';

export const ServiceCard = ({ service }) => {
  return (
    <div className={styles.card__container}>
      <div className={styles['card__icon-wrap']}>
        <img src={service.iconSrc} className={styles.card__icon} alt="" />
      </div>
      <div className={styles.card__text}>
        <p className={styles.card__title}>{service.name}</p>
        <div className={styles['card__wrap-more']}>
          <div className={styles.card__square}></div>
          <a className={styles.card__link} href="#services">
            Подробнее
          </a>
        </div>
      </div>
    </div>
  );
};
