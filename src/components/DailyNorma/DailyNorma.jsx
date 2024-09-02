import css from './DailyNorma.module.css';
// import { useDispatch } from 'react-redux';
const openModal = () => {
  console.log('openModal');
};
let water = '1.5 L';
//  dispatch water info
const DailyNorma = () => {
  return (
    <div className={css.container}>
      <div className={css.headerContainer}>
        <h2 className={css.headerText}>My daily norma</h2>
      </div>
      <div className={css.funcContainer}>
        <h2 className={css.waterInfo}>{water ? water : '2 L'}</h2>
        <button type="button" className={css.editButton} onClick={openModal}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default DailyNorma;
