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
