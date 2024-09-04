import { useState } from 'react';
import style from './DailyUserValue.module.css';
// import { useDispatch } from 'react-redux';
// import { addWaterRecord } from 'redux/water/operations';

const DailyUserValue = ({ closeModal }) => {
  // const dispatch = useDispatch();
  const [userValue, setUserValue] = useState();

  const handleClick = () => {
    const record = { date: Date.now(), volume: +userValue };
    // dispatch(addWaterRecord(record));
    closeModal();
  };

  return (
    <div className={style.userValue}>
      <div className={style.userValueContainer}>
        <p className={style.userValueDescription}>
          Write down how much water you will drink:
        </p>
        <input
          className={style.inputValue}
          type="text"
          name="inputValue"
          placeholder="0"
          value={userValue}
          onChange={e => {
            setUserValue(e.target.value);
          }}
        />
      </div>
      <div className={style.btnContainer}>
        <button className={style.btn} onClick={handleClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default DailyUserValue;
