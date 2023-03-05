import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom'

import HomePage from './Pages/HomePage';
import TransmissionConfirmation from './Pages/TransmissionConfirmation';
import NearbyHospitals from './Pages/NearbyHospitals';
import Intake from './Pages/Intake';
import UserProfile from './Pages/UserProfile';
import ERNavBar from './Components/ERNavBar';

import { userProfileProps } from './Data/data';


function App() {
  return (
    <div className="App">
      <ERNavBar />
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Intake" element={<Intake />} />
        <Route path="/nearbyhospitals" element={<NearbyHospitals />} />
        <Route path="/transmissionconfirmation" element={
          <TransmissionConfirmation
            fileName="Forms Uploaded.pdf"
            transactionId=" 123456"
            timeUploaded=" 01/24/2023, 18:03:33 EST"
            timeReceived=" 01/24/2023, 18:04:03 EST"
          />
        } />
        <Route path="/userprofile" element={<UserProfile {...userProfileProps} />} />
        <Route path="*" element={<Navigate to="/Home" />}/>
      </Routes>
    </div>
  );
}

export default App;



