import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchThoughts = createAsyncThunk(
  'thoughts/fetchThoughts',
  async () => {
    const response = await axios.get('http://localhost:5000/thoughts');
    return response.data;
  }
);

export const addThought = createAsyncThunk(
  'thoughts/addThought',
  async (thought) => {
    const response = await axios.post('http://localhost:5000/thoughts', thought);
    return response.data;
  }
);
