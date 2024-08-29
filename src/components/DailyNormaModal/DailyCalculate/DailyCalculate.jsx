import style from './DailyCalculate.module.css';
import { useState } from 'react';

const DailyCalculate = ({}) => {
  const [weight, setWeight] = useState(0);
  const [activity, setActivity] = useState(0);
  const [gender, setGender] = useState('Woman');

  const calculate = () => {
    if (true) {
      return weight * 0.03 + activity * 0.4;
    } else {
      return weight * 0.04 + activity * 0.6;
    }
  };

  const result = calculate();

  return (
    <div>
      <h4>Calculate your rate:</h4>
      <div>
        <div>
          <input
            onChange={() => setGender('Woman')}
            type="radio"
            name="gender"
            checked={gender === 'Woman'}
          />
          <label>For woman</label>
        </div>
        <div>
          <input
            onChange={() => setGender('Man')}
            type="radio"
            name="gender"
            checked={gender === 'Man'}
          />
          <label>For man</label>
        </div>
      </div>
      <p>Your weight in kilograms:</p>
      <input
        onChange={e => setWeight(+e.target.value)}
        type="text"
        name=""
        placeholder="0"
        value={weight}
      />
      <p>
        The time of active participation in sports or other activities with a
        high physical. load in hours:
      </p>
      <input
        onChange={e => setActivity(+e.target.value)}
        type="text"
        name=""
        placeholder="0"
        value={activity}
      />
      <p>
        The required amount of water in liters per day:<span>{result} L</span>
      </p>
    </div>
  );
};

export default DailyCalculate;
