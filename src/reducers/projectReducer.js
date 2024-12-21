import { createSlice } from '@reduxjs/toolkit';
import { fetchProjects, addProject, deleteProject, updateProject } from '../actions/projectActions';

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
    builder.addCase(deleteProject.fulfilled, (state, action) => {
      return state.filter((project) => project.id !== action.payload);
    });
    builder.addCase(updateProject.fulfilled, (state, action) => {
      const index = state.findIndex((project) => project.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    });
  },
});

export default projectsSlice.reducer;