//import { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Header from './layout/header';
import NotFound from './auth/notFound';

import EditReservation from './client/editReservation';
import MainSearch from './client/mainSearch';
import MyPage from './client/myPage';
import Reservation from './client/reservation';
import ReviewEdit from './client/reviewEdit';
import ReviewWrite from './client/reviewWrite';
import StoreDetail from './client/storeDetail';


function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/editReservation" element={<EditReservation />} />
            <Route path="/mainSearch" element={<MainSearch />} />
            <Route path="/myPage" element={<MyPage />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/reviewEdit" element={<ReviewEdit />}/>
            <Route path="/reviewWrite" element={<ReviewWrite />}/>
            <Route path="/storeDetail" element={<StoreDetail />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
        </div>
    </div>
  );
}

export default App;