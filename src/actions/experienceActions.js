import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch all experiences
export const fetchExperiences = createAsyncThunk(
  'experiences/fetchExperiences',
  async () => {
    const response = await axios.get('http://localhost:5000/experiences');
    return response.data;
  }
);

// Add a new experience
export const addExperience = createAsyncThunk(
  'experiences/addExperience',
  async (experience) => {
    const response = await axios.post('http://localhost:5000/experiences', experience);
    return response.data;
  }
);

// Delete an experience
export const deleteExperience = createAsyncThunk(
  'experiences/deleteExperience',
  async (id) => {
    await axios.delete(`http://localhost:5000/experiences/${id}`);
    return id;
  }
);

// Update an existing experience
export const updateExperience = createAsyncThunk(
  'experiences/updateExperience',
  async ({ id, title, date, description, photo, link }) => {
    const response = await axios.put(`http://localhost:5000/experiences/${id}`, {
      title,
      date,
      description,
      photo,
      link
    });
    return response.data;
  }
);
