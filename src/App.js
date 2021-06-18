import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar'
import Education from './components/Education'
import Footer from './components/Footer'
// import Home from './components/pages/home';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Main} />
      </Switch>
      <Education />
      <Footer />
    </Router>
  );
}

export default App;
  