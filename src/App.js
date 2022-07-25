import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Generate from './Pages/Generate';
import Warranty from './Pages/Warranty';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Generate />} />
        <Route path="/warranty" element={<Warranty />} />
      </Routes>
    </div>
  );
}

export default App;
