import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { BlockRow } from '../block-row/block-row';
import { ProjectCard } from './project-card/project-card';
import { servicesData } from '../../services/mocks';

import styles from './projects.module.scss';

export const Projects = () => {
  const clientWidth = document.documentElement.clientWidth;
  const countSwiper =
    clientWidth / 500 > 3 ? 3 : clientWidth / 450 < 1 ? 1 : clientWidth / 450;
  const handleButtonClick = () => {
    console.log('Проекты открыты');
  };
  return (
    <BlockRow
      caption="Прошлые проекты"
      title="Результаты наших проектов говорят сами за себя"
      name="projects"
      needBtn
      textBtn="Просмотреть проекты"
      onClick={handleButtonClick}
    >
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={40}
        slidesPerView={countSwiper}
        centeredSlides={true}
        navigation
        className={styles.projects}
        style={{
          '--swiper-theme-color': '#ff4d01',
          '--swiper-pagination-bullet-size': '12px',
          '--swiper-pagination-bullet-horizontal-gap': '6px',
        }}
      >
        {servicesData.map((service) => {
          return (
            <SwiperSlide key={uuidv4()}>
              <ProjectCard service={service} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </BlockRow>
  );
};
