import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { BlockRow } from '../block-row/block-row';
import { servicesData } from '../../services/mocks';
import { ReviewCard } from './review-card/review-card';

import styles from './reviews.module.scss';

export const Reviews = () => {
  const clientWidth = document.documentElement.clientWidth;
  const countSwiper =
    clientWidth / 900 > 1.3
      ? 1.3
      : clientWidth / 900 < 1
      ? 1
      : clientWidth / 900;
  return (
    <BlockRow
      caption="Отзывы"
      title="Что говорят наши клиенты о нас и нашей работе"
      name="reviews"
      needBtn={false}
    >
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={60}
        slidesPerView={countSwiper}
        navigation
        pagination={{ clickable: true }}
        className={styles.reviews}
        style={{
          '--swiper-theme-color': '#ff4d01',
        }}
      >
        {servicesData.map((service) => {
          return (
            <SwiperSlide key={uuidv4()}>
              <ReviewCard service={service} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </BlockRow>
  );
};
