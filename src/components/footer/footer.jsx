import { v4 as uuidv4 } from 'uuid';

import { pages } from '../../services/mocks';
import { Phone, Mail, Pin } from '../icons';

import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer__container}>
      <div className={styles.footer}>
        <article className={styles.footer__text}>
          <section className={styles.footer__logo}>
            <div className={styles.footer__caption}>LOGO</div>
            <span className={styles.footer__copy}>Copyright © 2023</span>
          </section>
          <section>
            <span className={styles.footer__title}>Меню</span>
            <ul className={styles.footer__menu}>
              {pages.map((page) => {
                return (
                  <li className={styles.footer__item} key={uuidv4()}>
                    <a className={styles.footer__link} href={page.src}>
                      {page.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        </article>
        <ul className={styles.footer__contacts}>
          <li className={styles.footer__contact}>
            <div className={styles.footer__icon}>
              <Pin />
            </div>
            г. Самара, ул. Ново-Садовая д.1
          </li>
          <li className={styles.footer__contact}>
            <div className={styles.footer__icon}>
              <Phone />
            </div>
            <a className={styles.footer__link} href="tel:8-800-000-0-000">
              8-800-000-0-000
            </a>
          </li>
          <li className={styles.footer__contact}>
            <div className={styles.footer__icon}>
              <Mail />
            </div>
            <a className={styles.footer__link} href="mailto:mail@mail.com">
              mail@mail.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
