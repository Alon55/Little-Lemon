import React from 'react';
import './App.css';
import Store from './Store';
import Header from './components/Header';
import Home from './components/Home';
import ReserveTable from './components/ReserveTable';
import Confirmation from './components/Confirmation';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <Store>
      <div className="background">
        <div className="container">
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/reserve-table" element={<ReserveTable />} />
              <Route path="/confirmation" element={<Confirmation />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </Store>
  );
}

export default App;
