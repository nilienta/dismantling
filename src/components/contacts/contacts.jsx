import React from 'react';
import { Box } from '@mui/material';

import { BlockRow } from '../block-row/block-row';
import { Phone, Mail, Pin } from '../icons';

import styles from './contacts.module.scss';

export const Contacts = () => {
  const sizeIframe =
    document.documentElement.clientWidth > 420 ? '400' : '300px';
  return (
    <BlockRow
      caption="Контакты"
      name="contacts"
      title="Свяжитесь с нами любым удобным способом"
      needBtn
      textBtn="Оставить заявку"
      href="#form"
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '30px',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <div className={styles.contacts}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Pin /> <p>г. Самара, ул. Ново-Садовая д.1</p>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Phone />
            <a href="tel:8-800-000-0-000" className={styles.contacts__link}>
              8-800-000-0-000
            </a>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Mail />
            <a href="mailto:mail@mail.com" className={styles.contacts__link}>
              mail@mail.com
            </a>
          </Box>
        </div>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Abf0ada3ee5b6fa202faf44ed02658e08439095d6917f5538482a7dd6dddc488b&amp;source=constructor"
          width={sizeIframe}
          height={sizeIframe}
          style={{ borderWidth: 0 }}
          title="Карта с меткой"
        ></iframe>
      </Box>
    </BlockRow>
  );
};
