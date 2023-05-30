//import { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Header from './layout/header';
import NotFound from './auth/notFound';

import Main from './auth/main';
import Login from './auth/login';
import Signup from './auth/signup';
import EditInfo from './auth/editInfo';
import Leave from './auth/leave';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/editInfo" element={<EditInfo />} />
            <Route path="/leave" element={<Leave />} />
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;