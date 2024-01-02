import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LoginFormPage from './Components/LoginFormPage/LoginFormPage';
import Page404 from './Components/Page404/Page404';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Router>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route exact path="/login" element={<LoginFormPage />}></Route>
        <Route exact path="*" element={<Page404 />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
