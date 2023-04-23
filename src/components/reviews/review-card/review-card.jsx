import React from 'react';

import photoMen from '../../../assets/img/user.png';

import styles from './review-card.module.scss';

export const ReviewCard = ({ service }) => {
  return (
    <div className={styles.card}>
      <img src={photoMen} alt="" className={styles.card__img} />
      <div className={styles.card__text}>
        <p className={styles.card__title}>
          “Настоящая команда экспертов-подрядчиков”
        </p>
        <p className={styles.card__desc}>{service.desc}</p>
        <div className={styles.card__signed}>
          <p className={styles.card__name}>Иванов Иван</p>
          <p className={styles.card__city}>Самара</p>
        </div>
      </div>
    </div>
  );
};
