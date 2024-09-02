import style from './MonthStatsTable.module.css';
// import {useState} from 'react'
import icons from '../../images/icons.svg';
import { formatDate, getData } from './helper';
import { useState } from 'react';
import DayItem from './DayItem/DayItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMonthlyRecord } from '../../redux/water/operations';

// const items = getData();

const result = Array.from({ length: 30 }).fill(0);

const MonthStatsTable = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.water.monthlyRecords);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    dispatch(getMonthlyRecord(date));
  }, [date]);

  const filteredItems = items.reduce((result, item) => {
    result[item.date] = result[item.date] || 0;
    result[item.date] += item.amount;

    return result;
  }, result);

  const handlePreviousDateClick = () => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() - 1);
    setDate(newDate);
  };
  const handleNextDateClick = () => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + 1);
    setDate(newDate);
  };

  return (
    <div className={style.container}>
      <div className={style.headerContainer}>
        <h2>Month</h2>
        <div>
          <button onClick={handlePreviousDateClick}>
            <svg className={style.icons} width="6" height="10">
              <use href={`${icons}#icon-left-check-mark`}></use>
            </svg>
          </button>
          <p className={style.month}>{formatDate(date)}</p>
          <button onClick={handleNextDateClick}>
            <svg className={style.icons} width="6" height="10">
              <use href={`${icons}#icon-right-check-mark`}></use>
            </svg>
          </button>
        </div>
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
