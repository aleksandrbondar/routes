/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home.tsx';
import About from '../Pages/About.tsx';
import Contact from '../Pages/Contact.tsx';
import NotFound from '../Pages/NotFound.tsx';
import Navbar from '../Common/Navbar.tsx';
import Header from '../Common/Header.tsx';
import Footer from '../Common/Footer.tsx';
import Login from '../Layouts/Login.tsx';
import Registration from '../Layouts/Registration.tsx';
import Main from '../Common/Main.tsx';
import Layouts from '../Layouts.tsx';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;