import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import SidebarContent from './components/SidebarContent';

const App: React.FC = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
      </Routes>
      <SidebarContent />
    </Router>
  );
};

export default App;
