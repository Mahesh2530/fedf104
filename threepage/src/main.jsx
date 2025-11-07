import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Courses from './components/Courses';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav
          style={{
            padding: '10px 20px',
            borderBottom: '1px solid #ccc',
            background: '#b3e5fc', // lighter blue
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <span style={{ fontWeight: 'bold', fontSize: '20px', color: '#1976d2' }}>
            ThreePage Project
          </span>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Link to="/courses" style={{ margin: '0 10px' }}>Courses</Link>
            <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
            <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
