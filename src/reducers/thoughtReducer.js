import { createSlice } from '@reduxjs/toolkit';
import { fetchThoughts } from '../actions/thoughtActions';

const thoughtsSlice = createSlice({
  name: 'thoughts',
  initialState: [],
  reducers: {
    addThought: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchThoughts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { addThought } = thoughtsSlice.actions;

export default thoughtsSlice.reducer;
