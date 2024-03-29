import './App.scss';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Changed from 'Link' to 'Route'
import Team from './Components/Team/Team';
import Contact from './Components/Contact/Contact';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className='appWrapper'>
      <Router>
        <Header />
      <div className="mainWrapper mt-55">        
        {/* Use 'Route' instead of 'Routes' */}
        <Routes>
          {/*******Define routes using the 'Route' component *******/}
          <Route path='/' element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>      
    </Router>
    <Footer />
    </div>


  );
}

export default App;
