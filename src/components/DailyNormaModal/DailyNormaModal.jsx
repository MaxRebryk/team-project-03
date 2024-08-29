import style from './DailyNormaModal.module.css';
import { useState } from 'react';

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
          <div>
            <div>
              <p>
                For girl:<span>V=(M*0,03) + (T*0,4)</span>
              </p>
              <p>
                For man:<span>V=(M*0,04) + (T*0,6)</span>
              </p>
            </div>
            <p>
              * V is the volume of the water norm in liters per day, M is your
              body weight, T is the time of active sports, or another type of
              activity commensurate in terms of loads (in the absence of these,
              you must set 0)
            </p>
          </div>
          <div>
            <h4>Calculate your rate:</h4>
            <div>
              <div>
                <input type="radio" />
                <label>For woman</label>
              </div>
              <div>
                <input type="radio" />
                <label>For man</label>
              </div>
            </div>
            <p>Your weight in kilograms:</p>
            <input type="text" name="" placeholder="0" />
            <p>
              The time of active participation in sports or other activities
              with a high physical. load in hours:
            </p>
            <input type="text" name="" placeholder="0" />
            <p>
              The required amount of water in liters per day:<span>1.8 L</span>
            </p>
            <p>Write down how much water you will drink:</p>
            <input type="text" name="" placeholder="0" />
          </div>
        </div>
        <div>
          <button onClick={closeModal}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default DailyNormaModal;
