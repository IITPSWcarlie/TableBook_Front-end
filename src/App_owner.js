//import { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Header from './layout/header';
import NotFound from './auth/notFound';

import AddStore from './owner/addStore';
import BookerList from './owner/bookerList';
import EditStoreInfo from './owner/editStoreInfo';
import PopupDom from './owner/popupDom';
import StoreInfo from './owner/storeInfo';
import StoreList from './owner/storeList';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/addStore" element={<AddStore />} />
            <Route path="/bookerList" element={<BookerList />} />
            <Route path="/editStoreInfo" element={<EditStoreInfo />} />
            <Route path="/storeInfo" element={<StoreInfo />} />
            <Route path="/storeList" element={<StoreList />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;