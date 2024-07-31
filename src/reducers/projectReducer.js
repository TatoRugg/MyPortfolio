import { createSlice } from '@reduxjs/toolkit';
import { fetchProjects, addProject } from '../actions/projectActions';

const projectsSlice = createSlice({
  name: 'projects',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addProject.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default projectsSlice.reducer;

