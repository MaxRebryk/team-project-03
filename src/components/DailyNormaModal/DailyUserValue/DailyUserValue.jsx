import style from './DailyUserValue.module.css';

const DailyUserValue = () => {
  return (
    <div className={style.userValue}>
      <p className={style.userValueDescription}>
        Write down how much water you will drink:
      </p>
      <input
        className={style.inputValue}
        type="text"
        name="inputValue"
        placeholder="0"
      />
    </div>
  );
};

export default DailyUserValue;
