import { createSlice } from '@reduxjs/toolkit';
import { fetchExperiences, addExperience, deleteExperience, updateExperience } from '../actions/experienceActions';

const experienceSlice = createSlice({
  name: 'experiences',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchExperiences.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addExperience.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(deleteExperience.fulfilled, (state, action) => {
      return state.filter((experience) => experience.id !== action.payload);
    });
    builder.addCase(updateExperience.fulfilled, (state, action) => {
      const index = state.findIndex((experience) => experience.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    });
  },
});

export default experienceSlice.reducer;