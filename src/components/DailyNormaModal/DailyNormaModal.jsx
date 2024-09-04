import DailyFormula from './DailyFormula/DailyFormula';
import DailyUserValue from './DailyUserValue/DailyUserValue';
import DailyCalculate from './DailyCalculate/DailyCalculate';
import style from './DailyNormaModal.module.css';
import { useCallback, useEffect } from 'react';
import icons from '../../images/icons.svg';

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
          <button className={style.closeBtn} onClick={closeModal}>
            <svg className={style.icon} width="24" height="24">
              <use href={`${icons}#icon-close`}></use>
            </svg>
          </button>
        </div>
        <div className={style.contentOfModal}>
          <DailyFormula />
          <DailyCalculate />
          <DailyUserValue closeModal={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default DailyNormaModal;
