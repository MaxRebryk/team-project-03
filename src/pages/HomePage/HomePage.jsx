import DailyNorma from 'components/DailyNorma/DailyNorma';
import css from './HomePage.module.css';
import HomeBottleImg from 'components/HomeBottleImg/HomeBottleImg';
import MonthStatsTable from 'components/MonthStatsTable/MonthStatsTable';

const HomePage = () => {
  return (
    <section className={css.homeSection}>
      <div className={css.dailyContainer}>
        <DailyNorma />
      </div>

      <HomeBottleImg />
      <MonthStatsTable />
    </section>
  );
};

export default HomePage;