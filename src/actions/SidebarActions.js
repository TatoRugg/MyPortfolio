/* import { createAsyncThunk } from '@reduxjs/toolkit';
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
 */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch sidebar information
export const fetchSidebarInfo = createAsyncThunk(
  'sidebar/fetchSidebarInfo',
  async () => {
    const response = await axios.get('http://localhost:5000/sidebarInfo');
    return response.data;
  }
);

// Update sidebar information
export const updateSidebarInfo = createAsyncThunk(
  'sidebar/updateSidebarInfo',
  async (sidebarInfo) => {
    const response = await axios.put('http://localhost:5000/sidebarInfo', sidebarInfo);
    return response.data;
  }
);

// Fetch tools information
export const fetchTools = createAsyncThunk(
  'sidebar/fetchTools',
  async () => {
    const response = await axios.get('http://localhost:5000/tools');
    return response.data;
  }
);

// Add a new tool
export const addTool = createAsyncThunk(
  'sidebar/addTool',
  async (tool, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5000/tools', tool);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Failed to add tool'
      );
    }
  }
);