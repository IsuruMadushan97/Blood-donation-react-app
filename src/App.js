import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import WhyGiveBlood from './Components/Pages/WhyGiveBlood';
import WhoCanGiveBlood from './Components/Pages/WhoCanGiveBlood';
import TheDonationProcess from './Components/Pages/TheDonationProcess';
import WhereToDonate from './Components/Pages/WhereToDonate';
import NewsAndCampaigns from './Components/Pages/NewsAndCampaigns';
import SignUp from './Components/Pages/SignUp';

function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/who-give-blood' component={WhyGiveBlood}/>
        <Route path='/who-can-give-blood' component={WhoCanGiveBlood}/>
        <Route path='/the-donation-process' component={TheDonationProcess}/>
        <Route path='/where-to-donate' component={WhereToDonate}/>
        <Route path='/news-and-campaigns' component={NewsAndCampaigns}/>
        <Route path='/sign-up' component={SignUp}/>
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
