import { Header } from '../header/header';
import { About } from '../about/about';
import { ServicesList } from '../services-list/services-list';
import { Projects } from '../projects/projects';
import { Reviews } from '../reviews/reviews';
import { Contacts } from '../contacts/contacts';
import { Form } from '../form/form';
import { Footer } from '../footer/footer';
import ResponsiveAppBar from '../nav/nav';

import './app.module.scss';

export const App = () => {
  return (
    <div id="home">
      <ResponsiveAppBar>
        <Header />
        <About />
        <ServicesList />
        <Projects />
        <Reviews />
        <Contacts />
        <Form />
        <Footer />
      </ResponsiveAppBar>
    </div>
  );
};
