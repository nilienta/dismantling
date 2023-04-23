import React from 'react';

import srcBg from '../../../assets/img/bg.jpg';

import styles from './project-card.module.scss';

export const ProjectCard = ({ service }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img src={srcBg} alt="" />
      </div>
      <div className={styles.card__text}>
        <p className={styles.card__title}>{service.name}</p>
        <p className={styles.card__desc}>{service.desc}</p>
      </div>
    </div>
  );
};
