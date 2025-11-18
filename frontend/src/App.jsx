// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Data from './pages/Data';
import About from './pages/About';
import Developer from './pages/Developer';

function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/data" element={<Data />} />
            <Route path="/about" element={<About />} />
            <Route path="/developer" element={<Developer />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;