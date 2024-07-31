import { createSlice } from '@reduxjs/toolkit';
import { fetchExperiences } from '../actions/experienceActions';

const experienceSlice = createSlice({
  name: 'experiences',
  initialState: [],
  reducers: {
    addExperience: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchExperiences.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { addExperience } = experienceSlice.actions;

export default experienceSlice.reducer;

