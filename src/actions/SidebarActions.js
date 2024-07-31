import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSidebarInfo = createAsyncThunk(
  'sidebar/fetchSidebarInfo',
  async () => {
    const response = await axios.get('http://localhost:5000/sidebarInfo'); // Use full URL
    return response.data;
  }
);

export const updateSidebarInfo = createAsyncThunk(
  'sidebar/updateSidebarInfo',
  async (sidebarInfo) => {
    const response = await axios.put('http://localhost:5000/sidebarInfo', sidebarInfo); // Use full URL
    return response.data;
  }
);
