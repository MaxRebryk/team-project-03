import style from './DayItem.module.css';
// import {useState} from 'react'

const DayItem = ({ data, index }) => {
  const norma = 1500;
  const percent = Math.round((data / norma) * 100);
  return (
    <div className={style.container}>
      <div className={style.containerForDay}>
        <p className={style.numberOfDay}>{index}</p>
      </div>
      <div>
        <p className={style.percentOfDay}>{percent} %</p>
      </div>
    </div>
  );
};

export default DayItem;
