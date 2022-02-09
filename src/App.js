import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import CountryD from './components/detailsPage/CountryD';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/country" element={<CountryD />} />
      </Routes>
    </Router>
  );
}

export default App;
