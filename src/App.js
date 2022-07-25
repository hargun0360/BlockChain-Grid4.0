import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Generate from './Pages/Generate';
import Warranty from './Pages/Warranty';
import ClaimWarranty from './Pages/ClaimWarranty';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Generate />} />
        <Route path="/warranty" element={<Warranty />} />
        <Route path="/claim" element={<ClaimWarranty />} />
      </Routes>
    </div>
  );
}

export default App;
