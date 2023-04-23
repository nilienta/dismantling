import React from 'react';
import { Button } from '@mui/material';

import imgCranes from '../../assets/img/about.jpg';

import styles from './about.module.scss';

export const About = () => {
  return (
    <section className={styles.about} id="about">
      <img
        src={imgCranes}
        className={styles.about__img}
        alt="Сrane next to a destroyed house"
      />
      <div className={styles.about__content}>
        <h2 className={styles.about__caption}>/О нас</h2>
        <h3 className={styles.about__title}>
          Команда надежных и опытных подрядчиков
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit tristique
          imperdiet nisi metus, viverra nulla aliquet dui porta porttitor neque
          lectus diam justo lobortis purus in elit, elementum dignissim nullam
          vitae pellentesque aliquet aliquam sagittis pulvinar egestas morbi
          suspendisse eleifend.
        </p>
        <ul className={styles.about__list}>
          <li className={styles.about__item}>
            <div className={styles.about__number}>
              <span className={styles['about__number--orange']}>+</span>350
            </div>
            <span className={styles.about__desc}>Выполненных проектов</span>
          </li>
          <li className={styles.about__item}>
            <div className={styles.about__number}>
              <span className={styles['about__number--orange']}>12</span>
            </div>
            <span>Лет опыта</span>
          </li>
          <li className={styles.about__item}>
            <div className={styles.about__number}>
              <span className={styles['about__number--orange']}>+</span>400
            </div>
            <span className={styles.about__desc}>Довольных клиентов</span>
          </li>
        </ul>
        <Button
          variant="outlined"
          size="large"
          color="secondary"
          sx={{
            mt: 3,
          }}
        >
          Подробней о компании
        </Button>
      </div>
    </section>
  );
};
