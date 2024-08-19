/* import { createAsyncThunk } from '@reduxjs/toolkit';
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
 */
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

export const deleteThought = createAsyncThunk(
  'thoughts/deleteThought',
  async (id) => {
    await axios.delete(`http://localhost:5000/thoughts/${id}`);
    return id;
  }
);

export const updateThought = createAsyncThunk(
  'thoughts/updateThought',
  async ({ id, text }) => {
    const response = await axios.put(`http://localhost:5000/thoughts/${id}`, { text });
    return response.data;
  }
);
