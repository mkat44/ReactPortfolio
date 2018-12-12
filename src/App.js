import React from 'react';
import Main from './pages/Main';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Nav from './components/Navbar';
import Banner from './components/Banner';
import Footsy from './components/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";




const App = () => (
  <Router>
    <div>
      <Nav />
      <Banner />
      <Route exact path="/" component={Main} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      <Footsy />
    </div>
  </Router>
)

export default App;
