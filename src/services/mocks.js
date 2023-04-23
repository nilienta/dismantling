import {
  Demolition,
  Dismantling,
  Earthworks,
  Garbage,
  Improvement,
  Recycling,
} from '../components/icons';

export const servicesData = [
  {
    name: 'Снос зданий',
    iconSrc: Demolition,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit quis eget morbi fermentum sagittis, et mi lacus ornare tincidunt id.',
  },
  {
    name: 'Вывоз строительного мусора',
    iconSrc: Garbage,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit quis eget morbi fermentum sagittis, et mi lacus ornare tincidunt id.',
  },
  {
    name: 'Земляные работы',
    iconSrc: Earthworks,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit quis eget morbi fermentum sagittis, et mi lacus ornare tincidunt id.',
  },
  {
    name: 'Работы по благоустройству',
    iconSrc: Improvement,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit quis eget morbi fermentum sagittis, et mi lacus ornare tincidunt id.',
  },
  {
    name: 'Рециклинг строительных отходов',
    iconSrc: Recycling,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit quis eget morbi fermentum sagittis, et mi lacus ornare tincidunt id.',
  },
  {
    name: 'Демонтажные работы',
    iconSrc: Dismantling,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit quis eget morbi fermentum sagittis, et mi lacus ornare tincidunt id.',
  },
];
export const pages = [
  { text: 'Главная', src: '#home' },
  { text: 'О нас', src: '#about' },
  { text: 'Услуги', src: '#services' },
  { text: 'Проекты', src: '#projects' },
  { text: 'Отзывы', src: '#reviews' },
  { text: 'Контакты', src: '#contacts' },
  { text: 'Оставить заявку', src: '#form' },
];
