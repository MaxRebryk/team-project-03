import { useState } from 'react';
import DailyNormaModal from './DailyNormaModal/DailyNormaModal';

const App = () => {
  const [modalState, setModalState] = useState(false);
  const openModal = () => {
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };

  return (
    <div>
      <p>'React homework template'</p>
      <button onClick={openModal}>Open</button>
      <DailyNormaModal isOpen={modalState} closeModal={closeModal} />
    </div>
  );
};
export default App;
