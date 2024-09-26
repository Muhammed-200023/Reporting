import { configureStore } from '@reduxjs/toolkit';
import goalsReducer from '../redux/slices/goalsSlice';
import reportReducer from '../redux/slices/reportingSlice'

const store = configureStore({
  reducer: {
    goals: goalsReducer,
    reporting:reportReducer,
  },
});

export default store;
