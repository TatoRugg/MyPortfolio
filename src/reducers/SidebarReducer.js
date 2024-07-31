import { createSlice } from '@reduxjs/toolkit';
import { fetchSidebarInfo, updateSidebarInfo } from '../actions/SidebarActions';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    sidebarInfo: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSidebarInfo.fulfilled, (state, action) => {
      state.sidebarInfo = action.payload;
    });
    builder.addCase(fetchSidebarInfo.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(updateSidebarInfo.fulfilled, (state, action) => {
      state.sidebarInfo = action.payload;
    });
    builder.addCase(updateSidebarInfo.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default sidebarSlice.reducer;
