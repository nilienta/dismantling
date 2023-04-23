import React from 'react';
import Button from '@mui/material/Button';

import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <h1 className={styles.header__title}>
          Демонтаж крупных и мелких зданий
        </h1>
        <p className={styles.header__subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
          varius rhoncus, nullam pulvinar ut sollicitudin dictumst porttitor
          porttitor quis quisque erat.
        </p>
        <div className={styles.header__btn}>
          <Button variant="contained" size="large" href="#form">
            Оставить заявку
          </Button>
          <Button variant="outlined" size="large" color="info" href="#contacts">
            Контакты
          </Button>
        </div>
      </div>
    </header>
  );
};
