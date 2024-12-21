import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async () => {
    const response = await axios.get('http://localhost:5000/projects');
    return response.data;
  }
);

export const addProject = createAsyncThunk(
  'projects/addProject',
  async (project) => {
    const response = await axios.post('http://localhost:5000/projects', project);
    return response.data;
  }
);

// Delete a project
export const deleteProject = createAsyncThunk(
  'projects/deleteProject',
  async (id) => {
    await axios.delete(`http://localhost:5000/projects/${id}`);
    return id;
  }
);

// Update an existing project
export const updateProject= createAsyncThunk(
  'projects/updateProject',
  async ({ id, title, description, photos, link }) => {
    const response = await axios.put(`http://localhost:5000/projects/${id}`, {
      title,
      description,
      photos,
      link
    });
    return response.data;
  }
);
