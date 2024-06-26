/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from '../Home.tsx';
import About from '../About.tsx';
import Contact from '../Contact.tsx';



function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Головна</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>Про нас</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Контакти</NavLink></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;