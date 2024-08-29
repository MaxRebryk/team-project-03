import DailyFormula from './DailyFormula/DailyFormula';
import style from './DailyNormaModal.module.css';
import { useState } from 'react';
import DailyUserValue from './DailyUserValue/DailyUserValue';
import DailyCalculate from './DailyCalculate/DailyCalculate';

const DailyNormaModal = ({ isOpen, closeModal }) => {
  if (!isOpen) {
    return;
  }
  return (
    <div className={style.backdrop}>
      <div className={style.modal}>
        <div>
          <h3>My daily norma</h3>
          <button onClick={closeModal}>Close</button>
        </div>
        <div>
          <DailyFormula />
          <DailyCalculate />
          <DailyUserValue />
        </div>
        <div>
          <button onClick={closeModal}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default DailyNormaModal;
