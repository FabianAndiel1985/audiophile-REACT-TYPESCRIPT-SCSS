import './App.css';
import Navbar from './components/shared/navbar.component';

const App = (): JSX.Element => {
  return (
    <>
      <Navbar/>
      <div className="App">
          <p>
            Hallo
          </p>
      </div>
    </>
  );
}

export default App;


