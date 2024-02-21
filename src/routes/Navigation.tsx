import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../assets/react.svg';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img className="logo" src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink className={ ({ isActive }) => isActive ? "nav-active" : "" } to="/lazy1">Lazy1</NavLink>
            </li>
            <li>
              <NavLink className={ ({ isActive }) => isActive ? "nav-active" : "" } to="/lazy2">Lazy2</NavLink>
            </li>
            <li>
              <NavLink className={ ({ isActive }) => isActive ? "nav-active" : "" } to="/lazy3">Lazy3</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="lazy1" element={ <LazyPage1 /> } />
          <Route path="lazy2" element={ <LazyPage2 /> } />
          <Route path="lazy3" element={ <LazyPage3 /> } />
          
          <Route path="/*" element={ <Navigate to="/lazy1" replace /> } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}