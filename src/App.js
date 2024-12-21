// src/App.js version with the most update

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ThoughtsColumn from './components/ThoughtsColumn';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import ProjectDetail from './components/ProjectDetail';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import './App.css';

const App = () => (
  <Router>
    <AuthProvider>
      <div className="app">
        <Navbar />
        <div className="main-content-wrapper">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/login" element={<LoginPage />} />
              {/* Protect the admin route */}
              <Route element={<ProtectedRoute />}>
                <Route path="/admin" element={<AdminPage />} />
              </Route>
            </Routes>
          </main>
          <ThoughtsColumn />
        </div>
      </div>
    </AuthProvider>
  </Router>
);

export default App;
