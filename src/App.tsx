import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import Footer from './components/Footer';
import './Css/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <NavigationBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
