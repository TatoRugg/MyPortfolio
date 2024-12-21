import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import ExperiencePage from '../pages/ExperiencePage';
import AdminPage from '../pages/AdminPage';
import LoginPage from '../pages/LoginPage';
import ProjectDetail from './ProjectDetail';
import './MainContent.css';

const MainContent = () => (
  <main className="main-content">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </main>
);

export default MainContent;