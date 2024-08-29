import DailyFormula from './DailyFormula/DailyFormula';
import DailyUserValue from './DailyUserValue/DailyUserValue';
import DailyCalculate from './DailyCalculate/DailyCalculate';
import style from './DailyNormaModal.module.css';
import { useCallback, useEffect } from 'react';

const DailyNormaModal = ({ isOpen, closeModal }) => {
  const handleBackdropClick = useCallback(e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }, []);

  const onWindowKeydown = useCallback(
    e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    window.addEventListener('keydown', onWindowKeydown);
    return () => {
      window.removeEventListener('keydown', onWindowKeydown);
    };
  }, [onWindowKeydown]);

  if (!isOpen) {
    return;
  }
  return (
    <div className={style.backdrop} onClick={handleBackdropClick}>
      <div className={style.modal}>
        <div className={style.divWithTitle}>
          <h3 className={style.dailyNormaTitle}>My daily norma</h3>
          <button onClick={closeModal}>Close</button>
        </div>
        <div className={style.contentOfModal}>
          <DailyFormula />
          <DailyCalculate />
          <DailyUserValue />
        </div>
        <div className={style.btnContainer}>
          <button className={style.btn} onClick={closeModal}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyNormaModal;
