import WelcomePage from '../pages/WelcomePage/WelcomePage.jsx';
import DailyNormaModal from './DailyNormaModal/DailyNormaModal.jsx';

const App = () => {
  return (
    <>
      <WelcomePage />
      <DailyNormaModal isOpen={true} />
    </>
  );
};
export default App;
