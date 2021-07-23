import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HeroSection from './components/HeroSection';
import NavBar from './components/navbar/Index';
import Services from './Pages/LogoDesign';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HeroSection} />
        <Route path="/service" exact component={Services} />
      </Switch>
    </Router>
  );
}

export default App;
