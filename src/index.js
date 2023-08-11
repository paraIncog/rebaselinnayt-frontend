import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from './pages/Layout';
import './App.css';
import Home from './pages/Home';
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import RollingStock from './pages/RollingStock';
import Partners from './pages/Partners';
import Contacts from './pages/Contacts';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='faq' element={<FAQ />} />
          <Route path='rolling_stock' element={<RollingStock />} />
          <Route path='partners' element={<Partners />} />
          <Route path='contacts' element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
