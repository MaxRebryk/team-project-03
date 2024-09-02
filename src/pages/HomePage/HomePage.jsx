import DailyNorma from 'components/DailyNorma/DailyNorma';
import css from './HomePage.module.css';
import HomeBottleImg from 'components/HomeBottleImg/HomeBottleImg';

const HomePage = () => {
  return (
    <section className={css.homeSection}>
      <div className={css.dailyContainer}>
        <DailyNorma />
      </div>

      <HomeBottleImg />
    </section>
  );
};

export default HomePage;
