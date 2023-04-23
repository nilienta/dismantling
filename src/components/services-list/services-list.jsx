import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { BlockRow } from '../block-row/block-row';
import { ServiceCard } from './service-card/service-card';
import { servicesData } from '../../services/mocks';

import styles from './services-list.module.scss';

export const ServicesList = () => {
  const handleButtonClick = () => {
    console.log('Услуги открыты');
  };
  return (
    <BlockRow
      caption="Услуги"
      title="Комплексный набор услуг"
      name="services"
      needBtn
      textBtn="Открыть список услуг"
      onClick={handleButtonClick}
    >
      <div className={styles.services}>
        {servicesData.map((service) => {
          return <ServiceCard service={service} key={uuidv4()} />;
        })}
      </div>
    </BlockRow>
  );
};
