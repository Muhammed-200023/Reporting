import { createSlice } from '@reduxjs/toolkit';

const goalsSlice = createSlice({
  name: 'goals',
  initialState: {
    activeTabKey: null,
    goalsData: [],
    loading: true,
    isSaved: false,
    
  },
  reducers: {
    setActiveTabKey(state, action) {
      state.activeTabKey = action.payload;
    },
    setgoalsData(state, action) {
      state.goalsData = action.payload;
      const energyTab = action.payload.find(
        (data) => data.pillarName === 'Energy'
      );
      state.activeTabKey = energyTab ? energyTab.pillarName : action.payload[0].pillarName;
      state.loading = false;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setIsSaved(state, action) {
      state.isSaved = action.payload;
    },
  },
});

export const { setActiveTabKey, setgoalsData, setLoading, setIsSaved,} = goalsSlice.actions;
export default goalsSlice.reducer;
