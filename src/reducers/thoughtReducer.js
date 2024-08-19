/* import { createSlice } from '@reduxjs/toolkit';
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
 */

import { createSlice } from '@reduxjs/toolkit';
import { fetchThoughts, addThought, deleteThought, updateThought } from '../actions/thoughtActions';

const thoughtsSlice = createSlice({
  name: 'thoughts',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchThoughts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addThought.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(deleteThought.fulfilled, (state, action) => {
      return state.filter(thought => thought.id !== action.payload);
    });
    builder.addCase(updateThought.fulfilled, (state, action) => {
      const index = state.findIndex(thought => thought.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    });
  },
});

export default thoughtsSlice.reducer;

