import style from './MonthStatsTable.module.css';
// import {useState} from 'react'
import icons from '../../images/icons.svg';
import { getData } from './helper';
import { useState } from 'react';
import DayItem from './DayItem/DayItem';

const items = getData();

const MonthStatsTable = () => {
  const [date, setDate] = useState(new Date());

  const filteredItems = items.reduce((result, item) => {
    result[item.date] = result[item.date] || 0;
    result[item.date] += item.amount;

    return result;
  }, []);

  console.log(filteredItems);
  return (
    <div className={style.container}>
      <div className={style.headerContainer}>
        <h2>Month</h2>
        <button>
          <svg className={style.icons} width="6" height="10">
            <use>{`${icons}#icon-left-check-mark`}</use>
          </svg>
        </button>
        <p className={style.month}>{date.toISOString()}</p>
        <button>
          <svg className={style.icons} width="6" height="10">
            <use>{`${icons}#icon-right-check-mark`}</use>
          </svg>
        </button>
      </div>
      <div className={style.containerWithDays}>
        {filteredItems.map((item, i) => {
          return (
            <li key={i}>
              <DayItem data={item} index={i} />
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default MonthStatsTable;
