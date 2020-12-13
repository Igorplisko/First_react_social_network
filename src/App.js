import React from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';
import { Route } from "react-router-dom";
import DialogsContainer from './componets/Dialogs/DialogsContainer';
import Users from './componets/Users/Users';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs'
          render={() => <DialogsContainer />} />

        <Route path='/profile'
          render={() => <Profile />} />


        <Route path='/users'
          render={() => <Users />} />

      </div>
    </div>
  )
}

export default App;

