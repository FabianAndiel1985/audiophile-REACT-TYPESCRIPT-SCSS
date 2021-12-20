import './App.css';
import Navbar from './components/shared/navbar.component';
// import {BrowserRouter, Route} from 'react-router-dom';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/home.page"



const App = (): JSX.Element => {
  return (
    <>
      {/* <Navbar/> */}
      <Router>
        <Routes>
          <Route path="/"  element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


