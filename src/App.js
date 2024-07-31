import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ThoughtsColumn from './components/ThoughtsColumn';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import AdminPage from './pages/AdminPage';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <Navbar />
      <div className="main-content-wrapper">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>
        <ThoughtsColumn />
      </div>
    </div>
  </Router>
);

export default App;

