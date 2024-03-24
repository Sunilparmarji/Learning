import './App.scss';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Changed from 'Link' to 'Route'
import Team from './Components/Team/Team';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <Router>
      <Header />
      <div className="mainWrapper mt-56">        
        {/* Use 'Route' instead of 'Routes' */}
        <Routes>
          {/*******Define routes using the 'Route' component *******/}
          <Route path='/home' element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path="/footer" element={<Footer />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
