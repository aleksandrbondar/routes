/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home.tsx';
import About from '../Pages/About.tsx';
import Contact from '../Pages/Contact.tsx';
import NotFound from '../Pages/NotFound.tsx';
import Login from '../Layouts/Login.tsx';
import Registration from '../Layouts/Registration.tsx';
import Layouts from '../Layouts.tsx';
import { ComponentType } from 'react';

export interface RouteInterface {
  path: string;
  component: ComponentType;
  name?: string;
}


// type CallbackType = (route: RouteInterface, index: number) => ReactNode;

export const routes: RouteInterface[] = [
  { path: "/", component: Home, name: "Home" },
  { path: "/about", component: About, name: "About" },
  { path: "/contact", component: Contact, name: "Contact" },
  { path: "/contact/login", component: Login, name: "Login" },
  { path: "/contact/registration", component: Registration, name: "Registration" },
  { path: "/login", component: Login, name: "Login" },
  { path: "/registration", component: Registration, name: "Registration" },
  { path: "*", component: NotFound },
];

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts />}>
          {routes.map((route: RouteInterface, index: number) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;