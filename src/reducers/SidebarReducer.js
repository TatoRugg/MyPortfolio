/* import { createSlice } from '@reduxjs/toolkit';
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
 */

import { createSlice } from '@reduxjs/toolkit';
import { fetchSidebarInfo, updateSidebarInfo, fetchTools, addTool } from '../actions/SidebarActions';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    sidebarInfo: null,
    tools: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetching sidebar information
      .addCase(fetchSidebarInfo.fulfilled, (state, action) => {
        state.sidebarInfo = action.payload;
      })
      .addCase(fetchSidebarInfo.rejected, (state, action) => {
        state.error = action.error.message;
      })
      
      // Handle updating sidebar information
      .addCase(updateSidebarInfo.fulfilled, (state, action) => {
        state.sidebarInfo = action.payload;
      })
      .addCase(updateSidebarInfo.rejected, (state, action) => {
        state.error = action.error.message;
      })
      
      // Handle fetching tools
      .addCase(fetchTools.fulfilled, (state, action) => {
        state.tools = action.payload;
      })
      .addCase(fetchTools.rejected, (state, action) => {
        state.error = action.error.message;
      })

      // Handle adding a new tool
      .addCase(addTool.fulfilled, (state, action) => {
        state.tools.push(action.payload); // Add the new tool to the existing tools
      })
      .addCase(addTool.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default sidebarSlice.reducer;
