import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchExperiences = createAsyncThunk(
  'experiences/fetchExperiences',
  async () => {
    const response = await axios.get('http://localhost:5000/experiences');
    return response.data;
  }
);

export const addExperience = createAsyncThunk(
  'experiences/addExperience',
  async (experience) => {
    const response = await axios.post('http://localhost:5000/experiences', experience);
    return response.data;
  }
);
