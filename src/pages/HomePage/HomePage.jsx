import DailyNorma from 'components/DailyNorma/DailyNorma';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <section className={css.homeSection}>
      <DailyNorma />
    </section>
  );
};

export default HomePage;
